// import axios from "axios";
// import { useAuth } from "@/stores/auth.js";
// import { useLayout } from "~/stores/layout";
// export default defineNuxtPlugin((nuxtApp) => {
//   // var delay_on_isloading = null;
//   let ajax = axios.create({
//     baseURL:
//     useRuntimeConfig().MODE === "production"
//         ? window.location.origin
//         : useRuntimeConfig().public.BASE_URL_PUBLIC,
//     // baseURL: window.location.origin,
//     // headers: {
//     //     'Content-Type': 'application/json',
//     //     // 'Authorization': store.getters.isLoggedIn ? 'Bearer ' + '' : 'Bearer '+ localStorage.getItem('token')
//     // },
//   });

//   ajax.CancelToken = axios.CancelToken;
//   ajax.isCancel = axios.isCancel;

//   /*
//  * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
//  */
//   ajax.interceptors.request.use(
//     (config) => {
//       if (config?.params?.is_noloading || config?.data?.is_noloading) {
//         useAuth().setLoading(false);
//         useAuth().setSoftLoading(true);
//         if (config.params?.is_noloading)
//           delete config.params.is_noloading;
//         if (config.data?.is_noloading)
//           delete config.data.is_noloading;
//       } else {
//         useAuth().setLoading(true);
//       }

//       let token = useAuth().token;

//       if (token) {
//         config.headers["Authorization"] = Bearer ${token};
//       }

//       // if (['post', 'put', 'patch', 'delete'].includes(config.method)) {
//       //   config.data = { data: { ...encrypt(JSON.parse(JSON.stringify(config.data))) } }
//       // }

//       if (config.params) {
//         Object.keys(config?.params).forEach((key) => {
//           if (!config?.params?.[key] && (typeof config?.data?.[key] != 'number')) {
//             delete config?.params?.[key];
//           }
//         });
//         if (config?.params?.['only_params']) {
//           delete config?.params?.['only_params'];
//         }
//         if (config?.params?.['is_noloading']) {   
//           delete config?.params?.['is_noloading'];
//         }
//       }
//       if (config.data) {
//         Object.keys(config.data).forEach((key) => {
//           if (!config?.data?.[key] && (typeof config?.data?.[key] != 'number' && typeof config?.params?.[key] != 'string' && typeof config?.data?.[key] != 'boolean' && config?.data?.[key] !== "")) {
//             delete config.data[key];
//           }
//         });
//         if (config?.data?.['is_noloading']) {   
//           delete config?.data?.['is_noloading'];
//         }
//       }

//       return config;
//     },

//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   ajax.interceptors.response.use(
//     (response) => {
//       // if (response.status >= 200 && response.status < 300) {
//       //   response.data = JSON.parse(decrypt(response.data.data));
//       // }
//       // clearTimeout(delay_on_isloading);
//       // delay_on_isloading = setTimeout(() => {
//         useAuth().setLoading(false);
//         useAuth().setSoftLoading(false);
//       // }, 2000);
//       return response;
//     },
//     function (err) {
//       return new Promise(function () {
//         /resolve, reject/
//         // clearTimeout(delay_on_isloading);
//         // delay_on_isloading = setTimeout(() => {
//           useAuth().setLoading(false);
//           useAuth().setSoftLoading(false);
//         // }, 2000);

//         if(err.code == "ERR_NETWORK"){
//           useLayout().setNotification({
//             show: true,
//             title: "Error!",
//             message: Network Error!,
//             type: "error",
//           });
//         }

//         if (
//           err?.response?.status === 403 &&
//           err?.config &&
//           !err?.config?.__isRetryRequest
//         ) {
          
//           // if you ever get an unauthorized, logout the user
//           // useAuthStore().removeSession();
//           try {
//             useAuth().logout();
//             navigateTo('/auth/login')
//           } catch (error) {
//             console.log("error", error);
//           }
//           // you can also redirect to /login if needed !
//         }
//         // err.response.data = JSON.parse(decrypt(err.response.data.data));
//         console.log(err);
//         throw err;
//       });
//     }
//   );

//   return {
//     provide: {
//       api: ajax,
//     },
//   };
// });
