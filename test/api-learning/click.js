describe('API learning', () => {

    const MAX_WAIT_TIME = 5000;

    let pageUrl = "http://the-internet.herokuapp.com/login";


    it('Click on Link Text', async () => {

        let usernameSelector = await $("#username");
        let passwordSelector = await $("#password");
        let loginBtn = await $('[type="submit"]');

        await browser.url(pageUrl);

        usernameSelector.waitForDisplayed(MAX_WAIT_TIME);
        await usernameSelector.setValue('automation');
        passwordSelector.waitForDisplayed(MAX_WAIT_TIME);
        await passwordSelector.setValue('123456');
        await loginBtn.click();

        await browser.pause(3000);
    });
});