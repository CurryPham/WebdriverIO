describe('API Learning', function () {

    let pageUrl = "https://webdriver.io/docs/api.html";

    it('Handle Multiple Windows', async function () {

        await browser.url(pageUrl);

        let editBtnSelector = await $('=Edit');
        editBtnSelector.waitForDisplayed(5000);
        editBtnSelector.click();

        let allwindowID = await browser.getWindowHandles();
        console.log(allwindowID);

        let firstWindowID = await browser.allwindowID[0];
        let secondWindowID = await browser.allwindowID[1];

        await browser.switchToWindow(secondWindowID);

        let sencondWindowTitle = await browser.getTitle();
        await console.log('2 window title: ', sencondWindowTitle);

        await browser.switchToWindow(firstWindowID);
        let firstWindowTitle = await browser.getTitle();
        console.log(firstWindowTitle);

        await browser.pause(2000);


    }); 
});