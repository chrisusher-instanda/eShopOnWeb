package demo.eShopOnWeb;


import com.cucumber.listener.Reporter;
import demo.eShopOnWeb.utilities.Utility;
import demo.eShopOnWeb.propertyreader.PropertyReader;
import demo.eShopOnWeb.basepage.BasePage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;


public class Hooks extends BasePage {
    //TestBase is similar

    @Before
    public void openBrowser(){
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
    }
   // Reporter.assignAuthor("QA", "Sweta oza");

    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        driver.quit();
    }
}
