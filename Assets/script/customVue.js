var headerpage = new Vue({
   el: '.header-layout',
   data: {
     message: 'Hello Bola View vue!'
   }
 }) 

var validation = new Vue({
  el: '.form',
  data: {
    email : "",
    name:"", 
    password:"",
    emailBlured : false,
    valid : false, 
    submitted : false ,  
  },
  methods :{
    validate : function(){
      this.emailBlured = true;
       if( this.validEmail(this.email)){
          this.valid = true;
       }
       if(this.validName(this.name)){
         this.valid = true;
       }
       if(this.validPassword(this.password)){
         this.valid = false;
       }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validName: function(name){
      var reg = /^[a-zA-Z]+$/;
      return reg.test(name);
    },
    validPassword: function(password){
      var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return reg.test(password);
    },
    submit : function(){                   
      this.validate();     
      if(this.valid){
        // connection to server can be here
        this.submitted = true;
      }
    } 
  }
}) 