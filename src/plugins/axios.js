// import axios from 'axios'
// import { useCookie } from '../@core/composable/useCookie'

// export default {
//   install(app) {
//     const api = axios.create({
//       baseURL: process.env.VUE_APP_API_BASE_URL,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })

//     api.interceptors.request.use(config => {
//       const accessToken = useCookie('accessToken').value
//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`
//       }
//       return config
//     }, error => {
//       return Promise.reject(error)
//     })

//     api.interceptors.response.use(response => response, error => {
//       if (error.response.status === 401) {
//         const router = app.config.globalProperties.$router
//         router.push('/login')
//       }
//       return Promise.reject(error)
//     })

//     app.config.globalProperties.$api = api
//   }
// }
