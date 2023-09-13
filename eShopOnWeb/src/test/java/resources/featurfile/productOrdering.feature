Feature: Product Ordering and Basket

  As a customer of EshopOnWeb
  I want to be able to browse and order products with ease
  So that I can complete my purchases without issues

  @smoke
  Scenario Outline: Adding Product to Basket filter By Product Brand
    Given I am on the EshopOnWeb Catalog page
    When I click on LoginLink On Catalog page
    Then I Redirected to Login Page
    When I enter Email <validEmail> On Login page
    And I enter Password <validPassword> On Login page
    And I click the Login button On Login page
    #--Verify ability to select product brand from select options
    And I select <Brand1> from select dropdown option On Catalog page
    #--Verify ability to add product to basket
    And I add <product1> to basket On Catalog page
    Then Basket should reflect the added Item
    Then I verify <product1> added to Basket On BasketDetails page
    #---clear Basket
    When I change the quantity value <editQuantity> for <product1> to Basket On BasketDetails page
    And I click the Update button On BasketDetails page

    Examples:
      | validEmail               | validPassword | product1                | Brand1 | editQuantity |
      | "demouser@microsoft.com" | "Pass@word1"  | ".NET Foundation Sheet" | ".NET" | "0"          |

  @smoke
  Scenario Outline: verify Ability to Add product to basket filter by product type and remove product from Basket
    Given I am on the EshopOnWeb Catalog page
    When I click on LoginLink On Catalog page
    Then I Redirected to Login Page
    When I enter Email <validEmail> On Login page
    And I enter Password <validPassword> On Login page
    And I click the Login button On Login page
    #--Verify ability to select product type from select options
    And I select product <type1> from select dropdown option On Catalog page
    #--Verify ability to add product to cart
    And I add <product2> to basket On Catalog page
    Then Basket should reflect the added Item
    #--Validate Product and Quantity
    Then I verify <product2> added to Basket On BasketDetails page
    Then I verify <Quantity> for <product2> added to Basket On BasketDetails page
    #--Verify ability to delete item(by updating quantity=0 product get removed)
    When I change the quantity value <editQuantity> for <product2> to Basket On BasketDetails page
    And I click the Update button On BasketDetails page
    Then I validate Empty Basket <Message> On BasketDetails page

    Examples:
      | validEmail               | validPassword | product2                 | Quantity | editQuantity | type1 | Message            |
      | "demouser@microsoft.com" | "Pass@word1"  | ".NET Black & White Mug" | "1"      | "0"          | "Mug" | "Basket is empty." |

  @smoke
  Scenario Outline: Updating Quantity for Product on Basket
    Given I am on the EshopOnWeb Catalog page
    When I click on LoginLink On Catalog page
    Then I Redirected to Login Page
    When I enter Email <validEmail> On Login page
    And I enter Password <validPassword> On Login page
    And I click the Login button On Login page
    #--Verify ability to select product type from select options
    And I select product <type1> from select dropdown option On Catalog page
    #--Verify ability to add product to cart
    And I add <product2> to basket On Catalog page
    Then Basket should reflect the added Item
    #--Analyze Basket --Validate Product,Price and Quantity
    Then I verify <product2> added to Basket On BasketDetails page
    Then I verify <Quantity> for <product2> added to Basket On BasketDetails page
    Then I verify Price <price> for <product2> added to Basket On BasketDetails page
    #--Verify ability to update Quantity
    When I change the quantity value <editQuantity> for <product2> to Basket On BasketDetails page
    And I click the Update button On BasketDetails page
    Then I verify <editQuantity> for <product2> added to Basket On BasketDetails page

    Examples:
      | validEmail               | validPassword | product2                 | Quantity | editQuantity | type1 | price    |
      | "demouser@microsoft.com" | "Pass@word1"  | ".NET Black & White Mug" | "1"      | "4"          | "Mug" | "$ 8.50" |

  @smoke
  Scenario Outline: Checkout and Payment
    Given I am on the EshopOnWeb Catalog page
    When I click on LoginLink On Catalog page
    Then I Redirected to Login Page
    When I enter Email <validEmail> On Login page
    And I enter Password <validPassword> On Login page
    And I click the Login button On Login page
    #--Verify ability to select product type from select options
    And I select product <type3> from select dropdown option On Catalog page
    #--Verify ability to add product to cart
    And I add <product3> to basket On Catalog page
    Then Basket should reflect the added Item
    #--Validate Product and Quantity
    Then I verify <product3> added to Basket On BasketDetails page
    Then I verify <Quantity> for <product3> added to Basket On BasketDetails page
    Then I verify Price <price> for <product3> added to Basket On BasketDetails page
    When I click CheckOut button On BasketDetails page
    And I click PayNow button On BasketDetails page
    Then I validate Payment Success <Message> On BasketDetails page

    Examples:
      | validEmail               | validPassword | product3           | Quantity | type3   | Message                  | price    |
      | "demouser@microsoft.com" | "Pass@word1"  | "Roslyn Red Sheet" | "1"      | "Sheet" | "Thanks for your Order!" | "$ 8.50" |
