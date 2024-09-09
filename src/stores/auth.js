import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
// const nuxtApp = useNuxtApp()

export const useAuth = defineStore("auth", {
  state: () => ({
    user_data: {},
    user_email: null,
    token_data: "",
    isAuth_data: false,
    isLoading_data: false,
    isSoftLoading_data: false,
    role_data: { name: null, access: [] }
  }),
  getters: {
    user(state) {
      return {
        ...state.user_data?.eml && state.user_data || useCookie("user").value
      };
    },
    email: (state) => state.user_email || useCookie("user").value?.eml,
    token: (state) => state.token_data || useCookie("token").value,
    isAuth: (state) => {
      return state.isAuth_data || !!useCookie("token").value
    },
    isLoading: (state) => state.isLoading_data,
    isSoftLoading: (state) => state.isSoftLoading_data,
    // role: (state) => state.role_data.name && state.role_data || useCookie("rbac").value || useLocalStorage("rbac").value && JSON.parse(useLocalStorage("rbac").value),
    role: (state) => state.role_data.name && state.role_data || useCookie("rbac").value,

    testCookie: (state) => useCookie("accessToken").value
  },
//   actions: {
//     async login(values) {
//       try {
//         const response = await useNuxtApp().$api({
//           url: "/auth/login/",
//           method: "POST",
//           data: values,
//         });
//         // this.setToken(response.data.data[0].token)
//         this.setToken(response.data.data[0].token)
//         this.setUserEmail(values.email)
//         // const response = await useNuxtApp().$api.post('', values)
//         // console.log('lihat email after',values.email)
//         // console.log('coba lihat token',response.data.token_data)
//       } catch (error) {
//         throw error
//       }
//     },
//     // untuk get user profile secara otomatis di awal reload
//     async getProfile(only_profile = false) {
//       if(process.client){
//         if(useLocalStorage("rbac")?.value && useLocalStorage("rbac")?.value != 'undefined') this.role_data = JSON.parse(useLocalStorage("rbac")?.value);
//       }
//       return new Promise(async (resolve, reject) => {
//         try {
//           if (this.email == null) {
//             reject()
//           } else {
//             const result = await useNuxtApp().$api({
//               url: /users/detail/${this.email}/,
//               method: "GET",
//             });
//             this.user_data = result.data.data[0];
//             useCookie("user").value = result.data.data[0];

//             if(only_profile){
//               resolve(result.data.data);
//               return;
//             }
            
//             const getList = await useNuxtApp().$api({
//               url: /roles/get-roles/,
//               method: "GET",
//             });
//             this.role_data.name = getList.data.data.find(({ rlcd }) => rlcd == this.user_data.rlcd)?.rlnm

//             const getRbac = await useNuxtApp().$api({
//               url: /roles/get-rbac/,
//               params: { rlcd: this.user_data.rlcd, page_size: 9999 },
//               method: "GET",
//             })
//             this.role_data.access = getRbac.data.data.map(({ mnaccd }) => mnaccd)
//             useCookie("rbac").value = { name: getList.data.data.find(({ rlcd }) => rlcd == this.user_data.rlcd)?.rlnm, access: getRbac.data.data.map(({ mnaccd }) => mnaccd) };
//             if(process.client){
//               useLocalStorage("rbac").value = JSON.stringify({ name: getList.data.data.find(({ rlcd }) => rlcd == this.user_data.rlcd)?.rlnm, access: getRbac.data.data.map(({ mnaccd }) => mnaccd) });
//             }
//             resolve(result.data.data);
//           }
//         } catch (error) {
//           console.error(error);
//           reject(error);
//         }
//       });
//     },
//     setTempUserData(temp_user_data) {
//       this.temp_user_data = temp_user_data;
//     },
//     setToken(token) {
//       useCookie("token").value = token;
//       console.log("aa", this.token);
//       // console.log('lihat ls', localStorage?.getItem("token"))
//       this.token_data = token;
//       this.isAuth_data = true;
//     },
//     setUserEmail(values) {
//       useCookie("user").value = values;
//       // let existUserData = localStorage?.user || {};
//       // metode dalam javascript es 7 untuk memasukkan object baru dalam 1 object
//       // console.log('lihat email user', localStorage?.values)
//       this.user_email = values;
//     },
//     logout() {
//       return new Promise(async (resolve) => {
//         useCookie("token").value = null;
//         useCookie("user").value = null;
//         useCookie("rbac").value = null;
//         useLocalStorage("rbac").value = null;
//         this.isAuth_data = false;
//         this.user_data = {};
//         this.token_data = "";
//         this.user_email = null;
//         this.role_data = { name: null, access: [] }
//         resolve();
//       });
//     },
//     setLoading(isLoading) {
//       this.isLoading_data = isLoading;
//     },
//     setSoftLoading(isLoading) {
//       this.isSoftLoading_data = isLoading;
//     },
//   },
});
