Vue.component('child',{
    props: {
      text: {
        type: String,
        required: true
      }
    },
    template: `<div>{{ text }}</div>`
  });
  
  new Vue({
    el: '#app',
    data() {
      return {
        message: 'Welcome to SIT120 Task 2'
      }
    }
  })