const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function example() {
    // Path ke ChromeDriver
    // Termux path selenium
    // const chromeDriverPath = '/data/data/com.termux/files/usr/bin/chromedriver';
    // SETTINGAN //
    const chromeDriverPath = './chromedriver.exe';
    let chromeOptions = new chrome.Options();
    // chromeOptions.androidPackage('org.chromium.chrome.stable');
    chromeOptions.setMobileEmulation({ deviceName: "Nexus 5" });
    // CLEAR DB //
    let service = new chrome.ServiceBuilder(chromeDriverPath);
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .setChromeService(service)
        .build();
    driver.manage()
    // try {
    //     await driver.get('https://www.google.com/ncr');
    //     await driver.findElement(By.name('q')).sendKeys('siapa orang ganteng', Key.RETURN);
    //     let title = await driver.getTitle()
    //     console.log(title);
    //     let data = await driver.getSession()
    //     console.log(data);
    //     await driver.quit()
    // } finally {

    // }


};
example()