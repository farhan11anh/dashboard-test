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
      return new Promise(async (resolve, reject) => {
        try {
          const response = await $api.get('/orders', {
            responseType: 'blob', // Ensure response is returned as a Blob
            params: params,       // Include the query parameters
          });
    
          if ('showSaveFilePicker' in window) {
            // Use the modern File System Access API
            const handle = await window.showSaveFilePicker({
              suggestedName: 'transaction-report.xlsx',
              types: [
                {
                  description: 'Excel file',
                  accept: {
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
                  },
                },
              ],
            });
    
            const writable = await handle.createWritable();
            await writable.write(response.data);
            await writable.close();
            console.log('File successfully saved.');
          } else {
            // Fallback for browsers without File System Access API
            const url = URL.createObjectURL(response.data);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'transaction-report.xlsx';
            document.body.appendChild(anchor); // Append to the DOM to ensure click works in some browsers
            anchor.click();
            document.body.removeChild(anchor); // Clean up
            URL.revokeObjectURL(url);          // Revoke the blob URL to free up memory
          }
    
          resolve();
        } catch (error) {
          console.error('Error downloading file:', error);
          reject(error);
        }
      });
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
