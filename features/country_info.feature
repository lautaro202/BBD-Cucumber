Feature: Country Information API
  As a user
  I want to retrieve information about a country
  So that I can learn more about it
Scenario: Retrieve information for a specific country
  Given I have the endpoint to retrieve country information
  When I make a request to get information for the country with code "Argentina"
  Then the response should include information for "Argentina"