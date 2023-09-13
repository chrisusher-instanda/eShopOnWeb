package demo.eShopOnWeb.basepage;

import demo.eShopOnWeb.propertyreader.PropertyReader;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;


public class BasePage {
    //This is Base class which implements method to open and close browser
    //Author sweta oza

    public static WebDriver driver;
    String baseUrl = PropertyReader.getInstance().getProperty("baseUrl");
    String projectPath = System.getProperty("user.dir");

    public BasePage() {
        PageFactory.initElements(driver, this);
        PropertyConfigurator.configure(System.getProperty("user.dir")+"\\src\\test\\java\\resources\\propertiesfile\\log4j.properties");
    }

    public void selectBrowser(String browser) {
        if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", projectPath+"\\drivers\\chromedriver.exe");
            driver = new ChromeDriver();
        } else if (browser.equalsIgnoreCase("firefox")) {
            System.setProperty("webdriver.gecko.driver", projectPath + "/drivers/geckodriver.exe");
            driver = new FirefoxDriver();
        } else if (browser.equalsIgnoreCase("ie")) {
            System.setProperty("webdriver.ie.driver", projectPath + "/drivers/IEDriverServer.exe");
            driver = new InternetExplorerDriver();
        } else {
            System.out.println("Wrong browser name");
        }
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(Integer.parseInt(PropertyReader.getInstance().getProperty("implicitlyWait")), TimeUnit.SECONDS);
        driver.get(baseUrl);
    }

    public void closeBrowser(){
        if (driver != null){
            driver.quit();
        }
    }

}
