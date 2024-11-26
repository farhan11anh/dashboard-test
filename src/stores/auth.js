import { useCookie } from "@/@core/composable/useCookie";
import { useLayoutStore } from "./layout";
import { defineStore } from "pinia";

import { router } from "@/plugins/1.router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user_data: useCookie("userData").value || null,
    user_email: null,
    token_data: "",
    isAuth_data: false,
    isLoading_data: false,
    isSoftLoading_data: false,
    role_data: { name: null, access: [] },
  }),
  getters: {
    user: (state) => state.user_data || useCookie("userData").value,
    email: (state) => state.user_email || useCookie("user").value?.email,
    token: (state) => state.token_data || useCookie("accessToken").value,
    isAuth: (state) => {
      return state.isAuth_data || !!useCookie("accessToken").value;
    },
    isLoading: (state) => state.isLoading_data,
    isSoftLoading: (state) => state.isSoftLoading_data,
    // role: (state) => state.role_data.name && state.role_data || useCookie("rbac").value || useLocalStorage("rbac").value && JSON.parse(useLocalStorage("rbac").value),
    // role: (state) => state.role_data.name && state.role_data || useCookie("rbac").value,
  },
  actions: {
    async isLogin(values) {
      new Promise(async (resolve, reject) => {
        try {
          await $api.post("/users/current", values).then(() => {
            console.log("lihat email after", values.email);
            resolve();
          });
        } catch (error) {
          console.log("error", error);
          reject(error);
        }
      });
    },
    async setPassword(values) {
      new Promise(async (resolve, reject) => {
        try {
          await $api.post("/auth/create-password/", values).then(() => {
            useLayoutStore().setSnackbar(
              true,
              "success",
              "Create Password Success"
            );
            resolve();
          });
        } catch (error) {
          useLayoutStore().setSnackbar(true, "error", "Create Password Failed");
          reject(error);
        }
      });
    },
    sendEmailForgetPassword(values) {
      return new Promise(async (resolve, reject) => {
        try {
          await $api.post("/forgot-password/", values).then(() => {
            useLayoutStore().setSnackbar(
              true,
              "success",
              "Send Email Success, please check your email"
            );
            resolve();
          });
        } catch (error) {
          useLayoutStore().setSnackbar(true, "error", "Send Email Failed");
          reject(error);
        }
      });
    },
    async resetPassword(values) {
      new Promise(async (resolve, reject) => {
        try {
          await $api.post("/reset-password/", values).then(() => {
            useLayoutStore().setSnackbar(
              true,
              "success",
              "Reset Password Success"
            );
            resolve();
          });
        } catch (error) {
          useLayoutStore().setSnackbar(true, "error", "Reset Password Failed");
          reject(error);
        }
      });
    },
    async logout() {
      // Remove "accessToken" from cookie
      useCookie("accessToken").value = null;
      // Remove "userData" from cookie
      useCookie("userData").value = null;
      useCookie("userAbilityRules").value = null;
      router.push({ name: "login" });
    },
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
