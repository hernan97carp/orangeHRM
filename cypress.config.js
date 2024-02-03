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
      password:"admin123"
    },
    endpoint:{
      authLogin: "/auth/login",
      dashboardIndex: "/dashboard/index"
    }
  }

});
