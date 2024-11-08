import { defineStore } from 'pinia';

export const useReportTransactionStore = defineStore('report-transaction', {
  // State: Data managed by the store
  state: () => ({
    items_data : [],
    meta_data : {
      totalItems : 0,
      totalPages : 0,
      page : 0,
    },
  }),

  // Getters: Computed properties based on state
  getters: {
    items: (state) => state.items_data,
    meta: (state) => state.meta_data,
  },

  // Actions: Methods to modify the state (can be async)
  actions: {
    async getItems(params){
      new Promise((resolve, reject) => {
       $api.get('/orders', {params: params})
         .then((response) => {
           this.items_data = response.data.responseData.Items
           const { totalItems, totalPages, page, limit } = response.data.responseData
           this.meta_data = { totalItems, totalPages, page, limit }
           resolve()
         })
         .catch((error) => {
           console.log(error);
           reject(error)
         })
      })
    },

    async downloadFile(params) { 
      new Promise((resolve, reject) => {
        $api.get('/orders', {responseType: 'blob'}, {params: params})
          .then(async (response) => {
            if ('showSaveFilePicker' in window) {
              // Membuka file manager dengan dialog simpan file
              const handle = await window.showSaveFilePicker({
                suggestedName: 'transaction-report.xlsx',
                types: [
                  {
                    description: 'Text file',
                    accept: { 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'] },
                  },
                ],
              });
        
              // Menulis data blob ke file yang dipilih pengguna
              const writable = await handle.createWritable();
              await writable.write(response.data);
              await writable.close();
              console.log('File berhasil disimpan.');
            } else {
              const url = URL.createObjectURL(response.data);
              const anchor = document.createElement('a');
              anchor.href = url;
              anchor.download = 'transaction-report.xlsx';
              anchor.click();
              URL.revokeObjectURL(url);
            }
            resolve()
          })
          .catch((error) => {
            console.log(error);
            reject(error)
          })
      }) 
    },

    async getDetails(id) {
      new Promise((resolve, reject) => {
        $api.get('/orders/' + id)
          .then((response) => {
            this.items_data = response.data.responseData
            resolve()
          })
          .catch((error) => {
            console.log(error);
            reject(error)
          })
      })
    }
  },
});
