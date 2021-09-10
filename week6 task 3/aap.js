Vue.createApp({
    data() {
      return {
        selected: 'Kobe',
        options: [
          { text: 'Kobe', value: 'Kobe' },
          { text: 'Iverson', value: 'Iverson' },
          { text: 'Jordan', value: 'Jordan' },
          { text: 'James', value: 'James' }
        ]
      }
    }
  }).mount('#v-model-select-dynamic')