import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'
// import { redirects, routes } from './additional-routes'
import { setupGuards } from './guards'
import NotFound from '@/pages/notFound.vue'
import { $api } from '@/utils/api'

function recursiveLayouts(route) {
  if (route.children) {
    for (let i = 0; i < route.children.length; i++)
      route.children[i] = recursiveLayouts(route.children[i])
    
    return route
  }
  
  return setupLayouts([route])[0]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash)
      return { el: to.hash, behavior: 'smooth', top: 60 }
    
    return { top: 0 }
  },
  extendRoutes: pages => [
    ...[
      ...pages,
    ].map(route => recursiveLayouts(route)),
    {
      path: '/:patchMatch(.*)*', name : 'NotFound', component: NotFound
    }
  ],
})

router.beforeEach(async (to, from, next) => {
  const token = useCookie('accessToken').value; // ambil token dari localStorage
  if (token) {
    try {
      // Call API untuk cek token
      await $api.get('/users/current');
      next(); // Token valid, lanjutkan navigasi
    } catch (error) {
      // Hapus token jika invalid atau expired
      next('/login'); // Arahkan ke halaman login
    }
  } else if (to.meta.requiresAuth) {
    next('/login'); // Jika halaman butuh autentikasi dan tidak ada token, arahkan ke login
  } else {
    next(); // Jika tidak butuh autentikasi, lanjutkan
  }
});

setupGuards(router)
export { router }
export default function (app) {
  app.use(router)
}
