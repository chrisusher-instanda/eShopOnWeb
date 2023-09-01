@regression
Feature: Shopping from eShop website

  Background: I login the eShop
    Given I am on eShop landing page
    And I click on login button
    When I enter email and password
    And I click on the login button
    Then I am on eShop main page


  Scenario: I place the order
    Given I select brand "All" and type "Mug"
    And I click on search button
    When I select ".NET Black & White Mug" product
    And I click on checkout button
    And I click the pay now button
    Then I should see the "Thanks for your Order!" message

