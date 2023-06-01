let path = require('path');

describe('API Learning', function () {

    let pageUrl = "https://webdriver.io/docs/api/browser/saveScreenshot/";
    // let screenShotPath = './src/screenShot/SaveScreenShot.png'
    let screenShotPath = './screenShot/SaveScreenShot.png'

    it('Save Screenshot', async function () {
        await browser.url(pageUrl);

        // await browser.saveScreenshot(screenShotPath);
        await browser.saveScreenshot(path.join(__dirname, screenShotPath));

        await browser.pause(2000);


    });
});