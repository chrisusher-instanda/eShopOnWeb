Feature: User Authentication
  As a user of EshopOnWeb
  I want to ensure that user authentication is secure and reliable

  @smoke
  Scenario Outline: Successful Login
    Given I am on the EshopOnWeb Catalog page
    When I click on LoginLink On Catalog page
    Then I Redirected to Login Page
    When I enter Email <validEmail> On Login page
    And I enter Password <validPassword> On Login page
    And I click the Login button On Login page
    Then I should be successfully logged in

    Examples:
      | validEmail               | validPassword |
      | "demouser@microsoft.com" | "Pass@word1"  |

  @smoke
  Scenario Outline: Login with Invalid Credential values And validate Error Messages
    Given I am on the EshopOnWeb Catalog page
    When I click on LoginLink On Catalog page
    Then I Redirected to Login Page
    #---Do Not Enter Any Input Values and validate Error Messages---
    When I click the Login button On Login page
    #---Validate No Values Error Message----
    Then I validate invalidValue For Email <emailErrorMessage> On Login page
    Then I validate invalidValue For Password <passwordErrorMessage> On Login page
    #--validate invalid email error Message---
    When I enter Email <inValidEmail> On Login page
    And I enter Password <validPassword> On Login page
    And I click the Login button On Login page
    Then I validate invalidValue For Email <invalidEmailError> On Login page
    #--Validate invalid password error message--
    When I enter Email <validEmail> On Login page
    And I enter Password <inValidPassword> On Login page
    And I click the Login button On Login page
    Then I validate invalidValue For InvalidEmail <invalidPasswordErrorMessage> On Login page

    Examples:
      | inValidEmail | inValidPassword | emailErrorMessage              | passwordErrorMessage              | validPassword | validEmail               | invalidPasswordErrorMessage | invalidEmailError                                |
      | "example"    | "123@word1"     | "The Email field is required." | "The Password field is required." | "Pass@word1"  | "demouser@microsoft.com" | "Invalid login attempt."    | "The Email field is not a valid e-mail address." |