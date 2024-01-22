const assert = require('assert');
const axios = require('axios')
const { Given, When, Then } = require('@cucumber/cucumber');

let endpoint;
let response;

Given('I have the endpoint to retrieve country information', function () {
  endpoint = 'https://restcountries.com/v3.1/name/';
});

When('I make a request to get information for the country with code {string}', async  (countryCode) => {
  try {
    response = await axios.get(`${endpoint}${countryCode}`)
  } catch (error) {
    response = error.response
  }
});

Then('the response should include information for {string}', (countryName) => {
  assert(response.data[0].cca2, "AR")
  assert(response.data[0].independent)
  assert(response.data[0].region, "Americas")
  assert(response.data[0].subregion, "South America")
});
