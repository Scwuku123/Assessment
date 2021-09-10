Vue.component('child-component', {
    template: '#child-component',
    data() {
        return {
          childTitle: 'title from child component',
          childSubtitle: 'subtitle from child component'
        }
    },
    props:{
      subtitle: {
        type: String,
        required: true
      }
    }
  })
  
  new Vue ({
    el: '#app',
    data() {
        return {
          title: 'Task 4',
          subtitle: 'Nba super stars'
      }
    }
  })