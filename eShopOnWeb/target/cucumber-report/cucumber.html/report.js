$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurfile/productOrdering.feature");
formatter.feature({
  "line": 1,
  "name": "Product Ordering and Basket",
  "description": "\r\nAs a customer of EshopOnWeb\r\nI want to be able to browse and order products with ease\r\nSo that I can complete my purchases without issues",
  "id": "product-ordering-and-basket",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Adding Product to Basket filter By Brand",
  "description": "",
  "id": "product-ordering-and-basket;adding-product-to-basket-filter-by-brand",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter Email \u003cvalidEmail\u003e On Login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter Password \u003cvalidPassword\u003e On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#--Verify ability to select product brand from select options"
    }
  ],
  "line": 16,
  "name": "I select \u003cBrand1\u003e from select dropdown option On Catalog page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#--Verify ability to add product to basket"
    }
  ],
  "line": 18,
  "name": "I add \u003cproduct1\u003e to basket On Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Basket should reflect the added Item",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify \u003cproduct1\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#---clear Basket"
    }
  ],
  "line": 22,
  "name": "I change the quantity value \u003ceditQuantity\u003e for \u003cproduct1\u003e to Basket On BasketDetails page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click the Update button On BasketDetails page",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "product-ordering-and-basket;adding-product-to-basket-filter-by-brand;",
  "rows": [
    {
      "cells": [
        "validEmail",
        "validPassword",
        "product1",
        "Brand1",
        "editQuantity"
      ],
      "line": 26,
      "id": "product-ordering-and-basket;adding-product-to-basket-filter-by-brand;;1"
    },
    {
      "cells": [
        "\"demouser@microsoft.com\"",
        "\"Pass@word1\"",
        "\".NET Foundation Sheet\"",
        "\".NET\"",
        "\"0\""
      ],
      "line": 27,
      "id": "product-ordering-and-basket;adding-product-to-basket-filter-by-brand;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2841483100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Adding Product to Basket filter By Brand",
  "description": "",
  "id": "product-ordering-and-basket;adding-product-to-basket-filter-by-brand;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter Email \"demouser@microsoft.com\" On Login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter Password \"Pass@word1\" On Login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#--Verify ability to select product brand from select options"
    }
  ],
  "line": 16,
  "name": "I select \".NET\" from select dropdown option On Catalog page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#--Verify ability to add product to basket"
    }
  ],
  "line": 18,
  "name": "I add \".NET Foundation Sheet\" to basket On Catalog page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Basket should reflect the added Item",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify \".NET Foundation Sheet\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#---clear Basket"
    }
  ],
  "line": 22,
  "name": "I change the quantity value \"0\" for \".NET Foundation Sheet\" to Basket On BasketDetails page",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click the Update button On BasketDetails page",
  "keyword": "And "
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iAmOnTheEshopOnWebLoginPage()"
});
formatter.result({
  "duration": 171602100,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickOnLoginLinkOnCatalogPage()"
});
formatter.result({
  "duration": 295416400,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iRedirectedToLoginPage()"
});
formatter.result({
  "duration": 130577900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demouser@microsoft.com",
      "offset": 15
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterEmailOnLoginPage(String)"
});
formatter.result({
  "duration": 184500300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass@word1",
      "offset": 18
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterPasswordOnLoginPage(String)"
});
formatter.result({
  "duration": 135073200,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickTheLoginButton()"
});
formatter.result({
  "duration": 304756300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".NET",
      "offset": 10
    }
  ],
  "location": "MyProductOrderingStepdefs.iSelectFromSelectDropdownOptionOnCatalogPage(String)"
});
formatter.result({
  "duration": 348197900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".NET Foundation Sheet",
      "offset": 7
    }
  ],
  "location": "MyProductOrderingStepdefs.iAddToBasketOnCatalogPage(String)"
});
formatter.result({
  "duration": 136293400,
  "status": "passed"
});
formatter.match({
  "location": "MyProductOrderingStepdefs.basketShouldReflectTheAddedItem()"
});
formatter.result({
  "duration": 337053200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".NET Foundation Sheet",
      "offset": 10
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyAddedToBasketOnBasketDetailsPage(String)"
});
formatter.result({
  "duration": 34173700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 29
    },
    {
      "val": ".NET Foundation Sheet",
      "offset": 37
    }
  ],
  "location": "MyProductOrderingStepdefs.iChangeTheQuantityValueForToBasketOnBasketDetailsPage(String,String)"
});
formatter.result({
  "duration": 108311000,
  "status": "passed"
});
formatter.match({
  "location": "MyProductOrderingStepdefs.iClickTheUpdateButtonOnBasketDetailsPage()"
});
formatter.result({
  "duration": 160931300,
  "status": "passed"
});
formatter.after({
  "duration": 700655200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "verify Ability to remove product from Basket",
  "description": "",
  "id": "product-ordering-and-basket;verify-ability-to-remove-product-from-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I enter Email \u003cvalidEmail\u003e On Login page",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I enter Password \u003cvalidPassword\u003e On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 37,
      "value": "#--Verify ability to select product type from select options"
    }
  ],
  "line": 38,
  "name": "I select product \u003ctype1\u003e from select dropdown option On Catalog page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#--Verify ability to add product to cart"
    }
  ],
  "line": 40,
  "name": "I add \u003cproduct2\u003e to basket On Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Basket should reflect the added Item",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "#--Validate Product and Quantity"
    }
  ],
  "line": 43,
  "name": "I verify \u003cproduct2\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I verify \u003cQuantity\u003e for \u003cproduct2\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "#--Verify ability to delete item(by updating quantity\u003d0 product get removed)"
    }
  ],
  "line": 46,
  "name": "I change the quantity value \u003ceditQuantity\u003e for \u003cproduct2\u003e to Basket On BasketDetails page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click the Update button On BasketDetails page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I validate Empty Basket \u003cMessage\u003e On BasketDetails page",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "product-ordering-and-basket;verify-ability-to-remove-product-from-basket;",
  "rows": [
    {
      "cells": [
        "validEmail",
        "validPassword",
        "product2",
        "Quantity",
        "editQuantity",
        "type1",
        "Message"
      ],
      "line": 51,
      "id": "product-ordering-and-basket;verify-ability-to-remove-product-from-basket;;1"
    },
    {
      "cells": [
        "\"demouser@microsoft.com\"",
        "\"Pass@word1\"",
        "\".NET Black \u0026 White Mug\"",
        "\"1\"",
        "\"0\"",
        "\"Mug\"",
        "\"Basket is empty.\""
      ],
      "line": 52,
      "id": "product-ordering-and-basket;verify-ability-to-remove-product-from-basket;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1842592600,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "verify Ability to remove product from Basket",
  "description": "",
  "id": "product-ordering-and-basket;verify-ability-to-remove-product-from-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I enter Email \"demouser@microsoft.com\" On Login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I enter Password \"Pass@word1\" On Login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 37,
      "value": "#--Verify ability to select product type from select options"
    }
  ],
  "line": 38,
  "name": "I select product \"Mug\" from select dropdown option On Catalog page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#--Verify ability to add product to cart"
    }
  ],
  "line": 40,
  "name": "I add \".NET Black \u0026 White Mug\" to basket On Catalog page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Basket should reflect the added Item",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "#--Validate Product and Quantity"
    }
  ],
  "line": 43,
  "name": "I verify \".NET Black \u0026 White Mug\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I verify \"1\" for \".NET Black \u0026 White Mug\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "#--Verify ability to delete item(by updating quantity\u003d0 product get removed)"
    }
  ],
  "line": 46,
  "name": "I change the quantity value \"0\" for \".NET Black \u0026 White Mug\" to Basket On BasketDetails page",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click the Update button On BasketDetails page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I validate Empty Basket \"Basket is empty.\" On BasketDetails page",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iAmOnTheEshopOnWebLoginPage()"
});
formatter.result({
  "duration": 90640600,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickOnLoginLinkOnCatalogPage()"
});
formatter.result({
  "duration": 276894600,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iRedirectedToLoginPage()"
});
formatter.result({
  "duration": 99628600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demouser@microsoft.com",
      "offset": 15
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterEmailOnLoginPage(String)"
});
formatter.result({
  "duration": 179113900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass@word1",
      "offset": 18
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterPasswordOnLoginPage(String)"
});
formatter.result({
  "duration": 150274900,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickTheLoginButton()"
});
formatter.result({
  "duration": 317837600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mug",
      "offset": 18
    }
  ],
  "location": "MyProductOrderingStepdefs.iSelectProductFromSelectDropdownOptionOnCatalogPage(String)"
});
formatter.result({
  "duration": 323417500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 7
    }
  ],
  "location": "MyProductOrderingStepdefs.iAddToBasketOnCatalogPage(String)"
});
formatter.result({
  "duration": 142798000,
  "status": "passed"
});
formatter.match({
  "location": "MyProductOrderingStepdefs.basketShouldReflectTheAddedItem()"
});
formatter.result({
  "duration": 304815100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 10
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyAddedToBasketOnBasketDetailsPage(String)"
});
formatter.result({
  "duration": 43084100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    },
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 18
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyForAddedToBasketOnBasketDetailsPage(String,String)"
});
formatter.result({
  "duration": 81890700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 29
    },
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 37
    }
  ],
  "location": "MyProductOrderingStepdefs.iChangeTheQuantityValueForToBasketOnBasketDetailsPage(String,String)"
});
formatter.result({
  "duration": 152437700,
  "status": "passed"
});
formatter.match({
  "location": "MyProductOrderingStepdefs.iClickTheUpdateButtonOnBasketDetailsPage()"
});
formatter.result({
  "duration": 144187700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Basket is empty.",
      "offset": 25
    }
  ],
  "location": "MyProductOrderingStepdefs.iValidateEmptyBasketOnBasketDetailsPage(String)"
});
formatter.result({
  "duration": 47146600,
  "status": "passed"
});
formatter.after({
  "duration": 689546600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Updating Quantity for Product on Basket",
  "description": "",
  "id": "product-ordering-and-basket;updating-quantity-for-product-on-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I enter Email \u003cvalidEmail\u003e On Login page",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I enter Password \u003cvalidPassword\u003e On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 62,
      "value": "#--Verify ability to select product type from select options"
    }
  ],
  "line": 63,
  "name": "I select product \u003ctype1\u003e from select dropdown option On Catalog page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 64,
      "value": "#--Verify ability to add product to cart"
    }
  ],
  "line": 65,
  "name": "I add \u003cproduct2\u003e to basket On Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Basket should reflect the added Item",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#--Analyze Basket --Validate Product and Quantity"
    }
  ],
  "line": 68,
  "name": "I verify \u003cproduct2\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I verify \u003cQuantity\u003e for \u003cproduct2\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I verify Price \u003cprice\u003e for \u003cproduct2\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 71,
      "value": "#--Verify ability to update Quantity"
    }
  ],
  "line": 72,
  "name": "I change the quantity value \u003ceditQuantity\u003e for \u003cproduct2\u003e to Basket On BasketDetails page",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I click the Update button On BasketDetails page",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I verify \u003ceditQuantity\u003e for \u003cproduct2\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.examples({
  "line": 76,
  "name": "",
  "description": "",
  "id": "product-ordering-and-basket;updating-quantity-for-product-on-basket;",
  "rows": [
    {
      "cells": [
        "validEmail",
        "validPassword",
        "product2",
        "Quantity",
        "editQuantity",
        "type1",
        "price"
      ],
      "line": 77,
      "id": "product-ordering-and-basket;updating-quantity-for-product-on-basket;;1"
    },
    {
      "cells": [
        "\"demouser@microsoft.com\"",
        "\"Pass@word1\"",
        "\".NET Black \u0026 White Mug\"",
        "\"1\"",
        "\"4\"",
        "\"Mug\"",
        "\"$ 8.50\""
      ],
      "line": 78,
      "id": "product-ordering-and-basket;updating-quantity-for-product-on-basket;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2049014000,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Updating Quantity for Product on Basket",
  "description": "",
  "id": "product-ordering-and-basket;updating-quantity-for-product-on-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I enter Email \"demouser@microsoft.com\" On Login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I enter Password \"Pass@word1\" On Login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 62,
      "value": "#--Verify ability to select product type from select options"
    }
  ],
  "line": 63,
  "name": "I select product \"Mug\" from select dropdown option On Catalog page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 64,
      "value": "#--Verify ability to add product to cart"
    }
  ],
  "line": 65,
  "name": "I add \".NET Black \u0026 White Mug\" to basket On Catalog page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Basket should reflect the added Item",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#--Analyze Basket --Validate Product and Quantity"
    }
  ],
  "line": 68,
  "name": "I verify \".NET Black \u0026 White Mug\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I verify \"1\" for \".NET Black \u0026 White Mug\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I verify Price \"$ 8.50\" for \".NET Black \u0026 White Mug\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 71,
      "value": "#--Verify ability to update Quantity"
    }
  ],
  "line": 72,
  "name": "I change the quantity value \"4\" for \".NET Black \u0026 White Mug\" to Basket On BasketDetails page",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I click the Update button On BasketDetails page",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I verify \"4\" for \".NET Black \u0026 White Mug\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iAmOnTheEshopOnWebLoginPage()"
});
formatter.result({
  "duration": 79428700,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickOnLoginLinkOnCatalogPage()"
});
formatter.result({
  "duration": 286145500,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iRedirectedToLoginPage()"
});
formatter.result({
  "duration": 89473100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demouser@microsoft.com",
      "offset": 15
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterEmailOnLoginPage(String)"
});
formatter.result({
  "duration": 211543200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass@word1",
      "offset": 18
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterPasswordOnLoginPage(String)"
});
formatter.result({
  "duration": 162808200,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickTheLoginButton()"
});
formatter.result({
  "duration": 326272600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mug",
      "offset": 18
    }
  ],
  "location": "MyProductOrderingStepdefs.iSelectProductFromSelectDropdownOptionOnCatalogPage(String)"
});
formatter.result({
  "duration": 345242800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 7
    }
  ],
  "location": "MyProductOrderingStepdefs.iAddToBasketOnCatalogPage(String)"
});
formatter.result({
  "duration": 140332600,
  "status": "passed"
});
formatter.match({
  "location": "MyProductOrderingStepdefs.basketShouldReflectTheAddedItem()"
});
formatter.result({
  "duration": 292902600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 10
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyAddedToBasketOnBasketDetailsPage(String)"
});
formatter.result({
  "duration": 39205000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    },
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 18
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyForAddedToBasketOnBasketDetailsPage(String,String)"
});
formatter.result({
  "duration": 91423200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$ 8.50",
      "offset": 16
    },
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 29
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyPriceForAddedToBasketOnBasketDetailsPage(String,String)"
});
formatter.result({
  "duration": 58578400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    },
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 37
    }
  ],
  "location": "MyProductOrderingStepdefs.iChangeTheQuantityValueForToBasketOnBasketDetailsPage(String,String)"
});
formatter.result({
  "duration": 93592100,
  "status": "passed"
});
formatter.match({
  "location": "MyProductOrderingStepdefs.iClickTheUpdateButtonOnBasketDetailsPage()"
});
formatter.result({
  "duration": 142844800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 10
    },
    {
      "val": ".NET Black \u0026 White Mug",
      "offset": 18
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyForAddedToBasketOnBasketDetailsPage(String,String)"
});
formatter.result({
  "duration": 67721100,
  "status": "passed"
});
formatter.after({
  "duration": 687296700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 81,
  "name": "Checkout and Payment",
  "description": "",
  "id": "product-ordering-and-basket;checkout-and-payment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "I enter Email \u003cvalidEmail\u003e On Login page",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I enter Password \u003cvalidPassword\u003e On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 88,
      "value": "#--Verify ability to select product type from select options"
    }
  ],
  "line": 89,
  "name": "I select product \u003ctype3\u003e from select dropdown option On Catalog page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 90,
      "value": "#--Verify ability to add product to cart"
    }
  ],
  "line": 91,
  "name": "I add \u003cproduct3\u003e to basket On Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Basket should reflect the added Item",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 93,
      "value": "#--Validate Product and Quantity"
    }
  ],
  "line": 94,
  "name": "I verify \u003cproduct3\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I verify \u003cQuantity\u003e for \u003cproduct3\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "I verify Price \u003cprice\u003e for \u003cproduct3\u003e added to Basket On BasketDetails page",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "I click CheckOut button On BasketDetails page",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "I click PayNow button On BasketDetails page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I validate Payment Success \u003cMessage\u003e On BasketDetails page",
  "keyword": "Then "
});
formatter.examples({
  "line": 101,
  "name": "",
  "description": "",
  "id": "product-ordering-and-basket;checkout-and-payment;",
  "rows": [
    {
      "cells": [
        "validEmail",
        "validPassword",
        "product3",
        "Quantity",
        "type3",
        "Message",
        "price"
      ],
      "line": 102,
      "id": "product-ordering-and-basket;checkout-and-payment;;1"
    },
    {
      "cells": [
        "\"demouser@microsoft.com\"",
        "\"Pass@word1\"",
        "\"Roslyn Red Sheet\"",
        "\"1\"",
        "\"Sheet\"",
        "\"Thanks for your Order!\"",
        "\"$ 8.50\""
      ],
      "line": 103,
      "id": "product-ordering-and-basket;checkout-and-payment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1896885500,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Checkout and Payment",
  "description": "",
  "id": "product-ordering-and-basket;checkout-and-payment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "I enter Email \"demouser@microsoft.com\" On Login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I enter Password \"Pass@word1\" On Login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 88,
      "value": "#--Verify ability to select product type from select options"
    }
  ],
  "line": 89,
  "name": "I select product \"Sheet\" from select dropdown option On Catalog page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 90,
      "value": "#--Verify ability to add product to cart"
    }
  ],
  "line": 91,
  "name": "I add \"Roslyn Red Sheet\" to basket On Catalog page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Basket should reflect the added Item",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 93,
      "value": "#--Validate Product and Quantity"
    }
  ],
  "line": 94,
  "name": "I verify \"Roslyn Red Sheet\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I verify \"1\" for \"Roslyn Red Sheet\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "I verify Price \"$ 8.50\" for \"Roslyn Red Sheet\" added to Basket On BasketDetails page",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "I click CheckOut button On BasketDetails page",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "I click PayNow button On BasketDetails page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I validate Payment Success \"Thanks for your Order!\" On BasketDetails page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iAmOnTheEshopOnWebLoginPage()"
});
formatter.result({
  "duration": 114727700,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickOnLoginLinkOnCatalogPage()"
});
formatter.result({
  "duration": 293212800,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iRedirectedToLoginPage()"
});
formatter.result({
  "duration": 120938200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demouser@microsoft.com",
      "offset": 15
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterEmailOnLoginPage(String)"
});
formatter.result({
  "duration": 178033500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass@word1",
      "offset": 18
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterPasswordOnLoginPage(String)"
});
formatter.result({
  "duration": 144997900,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickTheLoginButton()"
});
formatter.result({
  "duration": 303341400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sheet",
      "offset": 18
    }
  ],
  "location": "MyProductOrderingStepdefs.iSelectProductFromSelectDropdownOptionOnCatalogPage(String)"
});
formatter.result({
  "duration": 388538400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roslyn Red Sheet",
      "offset": 7
    }
  ],
  "location": "MyProductOrderingStepdefs.iAddToBasketOnCatalogPage(String)"
});
formatter.result({
  "duration": 171607000,
  "status": "passed"
});
formatter.match({
  "location": "MyProductOrderingStepdefs.basketShouldReflectTheAddedItem()"
});
formatter.result({
  "duration": 350160900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roslyn Red Sheet",
      "offset": 10
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyAddedToBasketOnBasketDetailsPage(String)"
});
formatter.result({
  "duration": 63647600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    },
    {
      "val": "Roslyn Red Sheet",
      "offset": 18
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyForAddedToBasketOnBasketDetailsPage(String,String)"
});
formatter.result({
  "duration": 48398300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$ 8.50",
      "offset": 16
    },
    {
      "val": "Roslyn Red Sheet",
      "offset": 29
    }
  ],
  "location": "MyProductOrderingStepdefs.iVerifyPriceForAddedToBasketOnBasketDetailsPage(String,String)"
});
formatter.result({
  "duration": 42091300,
  "status": "passed"
});
formatter.match({
  "location": "MyProductOrderingStepdefs.iClickTheCheckOutButtonOnBasketDetailsPage()"
});
formatter.result({
  "duration": 184436700,
  "status": "passed"
});
formatter.match({
  "location": "MyProductOrderingStepdefs.iClickPayNowButtonOnBasketDetailsPage()"
});
formatter.result({
  "duration": 154435300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks for your Order!",
      "offset": 28
    }
  ],
  "location": "MyProductOrderingStepdefs.iValidatePaymentSuccessOnBasketDetailsPage(String)"
});
formatter.result({
  "duration": 37217800,
  "status": "passed"
});
formatter.after({
  "duration": 710587800,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurfile/userAuthentication.feature");
formatter.feature({
  "line": 1,
  "name": "User Authentication",
  "description": "As a user of EshopOnWeb\r\nI want to ensure that user authentication is secure and reliable",
  "id": "user-authentication",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Successful Login",
  "description": "",
  "id": "user-authentication;successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter Email \u003cvalidEmail\u003e On Login page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter Password \u003cvalidPassword\u003e On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "user-authentication;successful-login;",
  "rows": [
    {
      "cells": [
        "validEmail",
        "validPassword"
      ],
      "line": 16,
      "id": "user-authentication;successful-login;;1"
    },
    {
      "cells": [
        "\"demouser@microsoft.com\"",
        "\"Pass@word1\""
      ],
      "line": 17,
      "id": "user-authentication;successful-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1928695700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successful Login",
  "description": "",
  "id": "user-authentication;successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter Email \"demouser@microsoft.com\" On Login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter Password \"Pass@word1\" On Login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iAmOnTheEshopOnWebLoginPage()"
});
formatter.result({
  "duration": 85550100,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickOnLoginLinkOnCatalogPage()"
});
formatter.result({
  "duration": 310170300,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iRedirectedToLoginPage()"
});
formatter.result({
  "duration": 101915300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demouser@microsoft.com",
      "offset": 15
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterEmailOnLoginPage(String)"
});
formatter.result({
  "duration": 205308900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass@word1",
      "offset": 18
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterPasswordOnLoginPage(String)"
});
formatter.result({
  "duration": 187915900,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickTheLoginButton()"
});
formatter.result({
  "duration": 327254600,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iShouldBeSuccessfullyLoggedIn()"
});
formatter.result({
  "duration": 51111200,
  "status": "passed"
});
formatter.after({
  "duration": 766391600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Login with Invalid Credential values And validate Error Messages",
  "description": "",
  "id": "user-authentication;login-with-invalid-credential-values-and-validate-error-messages",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#---Do Not Enter Any Input Values and validate Error Messages---"
    }
  ],
  "line": 25,
  "name": "I click the Login button On Login page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#---Validate No Values Error Message----"
    }
  ],
  "line": 27,
  "name": "I validate invalidValue For Email \u003cemailErrorMessage\u003e On Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I validate invalidValue For Password \u003cpasswordErrorMessage\u003e On Login page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#--validate invalid email error Message---"
    }
  ],
  "line": 30,
  "name": "I enter Email \u003cinValidEmail\u003e On Login page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter Password \u003cvalidPassword\u003e On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I validate invalidValue For Email \u003cinvalidEmailError\u003e On Login page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#--Validate invalid password error message--"
    }
  ],
  "line": 35,
  "name": "I enter Email \u003cvalidEmail\u003e On Login page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter Password \u003cinValidPassword\u003e On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I validate invalidValue For InvalidEmail \u003cinvalidPasswordErrorMessage\u003e On Login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "user-authentication;login-with-invalid-credential-values-and-validate-error-messages;",
  "rows": [
    {
      "cells": [
        "inValidEmail",
        "inValidPassword",
        "emailErrorMessage",
        "passwordErrorMessage",
        "validPassword",
        "validEmail",
        "invalidPasswordErrorMessage",
        "invalidEmailError"
      ],
      "line": 41,
      "id": "user-authentication;login-with-invalid-credential-values-and-validate-error-messages;;1"
    },
    {
      "cells": [
        "\"example\"",
        "\"123@word1\"",
        "\"The Email field is required.\"",
        "\"The Password field is required.\"",
        "\"Pass@word1\"",
        "\"demouser@microsoft.com\"",
        "\"Invalid login attempt.\"",
        "\"The Email field is not a valid e-mail address.\""
      ],
      "line": 42,
      "id": "user-authentication;login-with-invalid-credential-values-and-validate-error-messages;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1894430000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Login with Invalid Credential values And validate Error Messages",
  "description": "",
  "id": "user-authentication;login-with-invalid-credential-values-and-validate-error-messages;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on the EshopOnWeb Catalog page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on LoginLink On Catalog page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I Redirected to Login Page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#---Do Not Enter Any Input Values and validate Error Messages---"
    }
  ],
  "line": 25,
  "name": "I click the Login button On Login page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#---Validate No Values Error Message----"
    }
  ],
  "line": 27,
  "name": "I validate invalidValue For Email \"The Email field is required.\" On Login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I validate invalidValue For Password \"The Password field is required.\" On Login page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#--validate invalid email error Message---"
    }
  ],
  "line": 30,
  "name": "I enter Email \"example\" On Login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter Password \"Pass@word1\" On Login page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I validate invalidValue For Email \"The Email field is not a valid e-mail address.\" On Login page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#--Validate invalid password error message--"
    }
  ],
  "line": 35,
  "name": "I enter Email \"demouser@microsoft.com\" On Login page",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter Password \"123@word1\" On Login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click the Login button On Login page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I validate invalidValue For InvalidEmail \"Invalid login attempt.\" On Login page",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iAmOnTheEshopOnWebLoginPage()"
});
formatter.result({
  "duration": 115668400,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickOnLoginLinkOnCatalogPage()"
});
formatter.result({
  "duration": 326715800,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iRedirectedToLoginPage()"
});
formatter.result({
  "duration": 128343500,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickTheLoginButton()"
});
formatter.result({
  "duration": 252776100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Email field is required.",
      "offset": 35
    }
  ],
  "location": "MyAuthenticationStepdefs.iValidateEmailLoginPage(String)"
});
formatter.result({
  "duration": 39770300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Password field is required.",
      "offset": 38
    }
  ],
  "location": "MyAuthenticationStepdefs.iValidatePasswordLoginPage(String)"
});
formatter.result({
  "duration": 48066500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example",
      "offset": 15
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterEmailOnLoginPage(String)"
});
formatter.result({
  "duration": 150685400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass@word1",
      "offset": 18
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterPasswordOnLoginPage(String)"
});
formatter.result({
  "duration": 152257600,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickTheLoginButton()"
});
formatter.result({
  "duration": 201060900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Email field is not a valid e-mail address.",
      "offset": 35
    }
  ],
  "location": "MyAuthenticationStepdefs.iValidateEmailLoginPage(String)"
});
formatter.result({
  "duration": 43137900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demouser@microsoft.com",
      "offset": 15
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterEmailOnLoginPage(String)"
});
formatter.result({
  "duration": 162203900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123@word1",
      "offset": 18
    }
  ],
  "location": "MyAuthenticationStepdefs.iEnterPasswordOnLoginPage(String)"
});
formatter.result({
  "duration": 172104800,
  "status": "passed"
});
formatter.match({
  "location": "MyAuthenticationStepdefs.iClickTheLoginButton()"
});
formatter.result({
  "duration": 364295100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login attempt.",
      "offset": 42
    }
  ],
  "location": "MyAuthenticationStepdefs.iValidateInvalidValueForInvalidEmailOnLoginPage(String)"
});
formatter.result({
  "duration": 64061200,
  "status": "passed"
});
formatter.after({
  "duration": 747171900,
  "status": "passed"
});
});