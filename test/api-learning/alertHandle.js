describe('API Learning', function () {

    let pageUrl = "http://the-internet.herokuapp.com/javascript_alerts";

    it('Handle Alert', async function () {

        await browser.url(pageUrl);
        let jsConfirm = await $('[onclick="jsConfirm()"]');
        //jsConfirm.waitForDisplayed(5000);
        await jsConfirm.click();

        let alertText = await browser.getAlertText();
        await console.log(alertText);

        await browser.acceptAlert();

        await browser.pause(2000);

        await jsConfirm.click();

        await browser.pause(2000);

        await browser.dismissAlert();

        await browser.pause(2000);


    });
});