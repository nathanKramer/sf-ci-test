[ ![Codeship Status for nathanKramer/sf-ci-test](https://codeship.com/projects/3c25aaa0-bb52-0133-e42b-4ee30d8e2805/status?branch=master)](https://codeship.com/projects/135819)
# Salesforce Continuous Integration Test

This is a quick example CI set up using codeship.

Codeship is configured with the following:

Pre-test Setup:
`npm install`

Test:
`grunt antdeploy:validate`

Deploy (on commit to develop)
`grunt antdeploy:staging`

----------------

To make a similar setup:

1. Steal `gruntfile.js`
2. `npm init` # Make a package.json
3. `npm install grunt grunt-cli grunt-ant-sfdc --save-dev`
4. Configure Codeship similarly to above
