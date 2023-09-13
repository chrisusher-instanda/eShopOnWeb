package demo.eShopOnWeb.pages;

import demo.eShopOnWeb.utilities.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

public class LoginPage extends Utility {
    //This class contains webElements And Methods for Login Page
    //------------**---Locators------**---//
    @FindBy(id = "Input_Email")
    WebElement _EnterEmail_Input;
    @FindBy(id = "Input_Password")
    WebElement _EnterPassword_Input;
    @FindBy(xpath = "//button[normalize-space()='Log in']")
    WebElement _Login_Button;
    @FindBy(xpath = "//h2[contains(text(),'Log in')]")
    WebElement _Title_Login;
    @FindBy(id = "Input_Email-error")
    WebElement _EmptyEmail_ErrorMsg;
    @FindBy(id = "Input_Password-error")
    WebElement _EmptyPassword_ErrorMsg;
    @FindBy(xpath = "//li[contains(text(),'Invalid login attempt.')]")
    WebElement _InvalidPassword_ErrorMsg;

    //Methods To perform Actions On WemElements

//    //--This will Enter source/From ZipCode --
//    public void eNtEREmail(String Email)
//    {
//        Reporter.log("Enter Email" +Email +"to Input Email"+_EnterEmail_Input.toString()+"<br>");
//        clearTextFromElement(_EnterEmail_Input);
//        sendTextToElement(_EnterEmail_Input,Email);
//    }
//
//    //--This will Enter source/From ZipCode --
//    public void eNtERPassword(String Password)
//    {
//        Reporter.log("Enter Password" +Password +"to source zip code"+_EnterPassword_Input.toString()+"<br>");
//        clearTextFromElement(_EnterEmail_Input);
//        sendTextToElement(_EnterEmail_Input,Password);
//    }
//
//    //----This Method Will Click on Log in Button
//    public void cliCKOnMenuTag(){
//        Reporter.log("click on Login Button" +_Login_Button+"<br>");
//        mouseHoverToElementAndClick(_Login_Button);
    //  }

    //----This Will check Log In Title  is visible on LogInPage---
    public String pageTitle_LogIn_Visible() {
        verifyThatElementIsDisplayed(_Title_Login);
        Reporter.log("get text from" + _Title_Login);
        return getTextFromElement(_Title_Login);
    }

    //----This Will enter Email into Email Input---
    public void eNteR_Email(String eMail) {
        Reporter.log("Enter Email" + eMail + "to input" + _EnterEmail_Input.toString() + "<br>");
        clearTextFromElement(_EnterEmail_Input);
        sendTextToElement(_EnterEmail_Input, eMail);
    }

    //----This Will enter Password---
    public void eNteR_Password(String passWord) {
        Reporter.log("Enter Password" + passWord + "to input" + _EnterPassword_Input.toString() + "<br>");
        clearTextFromElement(_EnterPassword_Input);
        sendTextToElement(_EnterPassword_Input, passWord);
    }

    //----This Method Will Click on Log in Button
    public void cliCKOnLoginButton() {
        Reporter.log("click on Login Button" + _Login_Button + "<br>");
        mouseHoverToElementAndClick(_Login_Button);
    }

    //----This Will verify error message for empty input---
    public String verIFyEmptyValueEmailErrorMessage() {
        Reporter.log("get text from" + _EmptyEmail_ErrorMsg.toString() + "<br>");
        return getTextFromElement(_EmptyEmail_ErrorMsg);
    }

    //----This Will verify error message for empty input---
    public String verIFyEmptyValuePasswordErrorMessage() {
        Reporter.log("get text from" + _EmptyPassword_ErrorMsg.toString() + "<br>");
        return getTextFromElement(_EmptyPassword_ErrorMsg);
    }

    //----This Will verify error message for Invalid input---
    public String verIFyInvalidValuePasswordErrorMessage() {
        Reporter.log("get text from" + _InvalidPassword_ErrorMsg.toString() + "<br>");
        return getTextFromElement(_InvalidPassword_ErrorMsg);
    }


}
