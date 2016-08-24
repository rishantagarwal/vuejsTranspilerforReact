// app.js
    
new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
      input:'Enter your input !',
      error: ''
     },

  // Anything within the ready function will run when the application loads
  ready: function() {},

  // Methods we want to use in our application are registered here
  methods: {
    //   output: function(){
        //   return babel.transform(this.input,{
        //       stage:0,
        //       loose: 'all'
        //   }).code
        // return this.input
    //   }
  },
  computed: {
      output: function(){
                let output = ""
                try{
                output =  babel.transform(this.input,{
                    stage:0,
                    loose: 'all'
                }).code
                this.error = ""
                return output
              }
              catch(e){
                  this.error = e.message
              }
      }
  }
});