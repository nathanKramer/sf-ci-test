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
