import { Builder, By, Key, until } from "selenium-webdriver"
import chrome from "selenium-webdriver/chrome.js"
import readline from "readline"
import cheerio from 'cheerio'
import { schedule } from "node-cron"

/*
    PATH CHROME DRIVER FOR ANDROID TERMUX : /data/data/com.termux/files/usr/bin/chromedriver
*/
// const chromeDriverPath = '/data/data/com.termux/files/usr/bin/chromedriver'
/*
    PATH CHROME DRIVER FOR PC/DESCTOP : ./chromedriver.exe
*/
const chromeDriverPath = './chromedriver.exe'

const chromeOptions = new chrome.Options()
/*
    For termux Use : chromeOptions.androidPackage('org.chromium.chrome.stable')
*/
// SETUP // 
chromeOptions.setMobileEmulation({ deviceName: "Nexus 5" })
const service = new chrome.ServiceBuilder(chromeDriverPath);
const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).setChromeService(service).build();
// SETUP //

await driver.get("https://facebook.com/")
await driver.wait(until.elementLocated(By.css('body'), 10000))

let sourchHtml = await driver.getPageSource()
let $ = cheerio.load(sourchHtml)
console.log($.html())
schedule('*/1 * * * *', async () => {

    console.log("TEST EXECUTE AUTOMATION JS");
})
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Tekan Enter untuk menutup browser...', async () => {
    await driver.quit();
    rl.close();
})
process.on("uncaughtException", async () => {
    console.log("Uncaught Exception")
    await driver.quit()
    process.exit(1)
})