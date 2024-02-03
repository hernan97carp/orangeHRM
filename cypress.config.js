const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php"
  },
  env:{
    AdminUser:{
      username:"Admin",
      usernameEmpty:"",
      password:"admin123",
      passwordEmpty:""

    },
    endpoint:{
      authLogin: "/auth/login",
      dashboardIndex: "/dashboard/index"
    }
  }

});
