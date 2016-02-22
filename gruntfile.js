module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ant-sfdc');

  grunt.initConfig({
    antdeploy: {
      options: {
      },
      validate: {
        options: {
          user: process.env.SF_USERNAME,
          pass: process.env.SF_PASSWORD,
          serverurl: 'https://login.salesforce.com',
          root: 'src/',
          runAllTests: false,
          existingPackage: true,
          rollbackOnError: true,
          checkOnly: true
        },
      },
      staging: {
        options: {
          user: process.env.SF_USERNAME,
          pass: process.env.SF_PASSWORD,
          serverurl: 'https://login.salesforce.com',
          root: 'src/',
          runAllTests: false,
          existingPackage: true,
          rollbackOnError: true,
          checkOnly: false
        },
      },
    },
  })
}