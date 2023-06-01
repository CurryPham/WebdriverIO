describe('Learning API', () => {

    let loginUrl = "http://the-internet.herokuapp.com/login";


    it('wait for displayed', async () => {
        let username = await $("#username");
        let password = await $("#password");

        await browser.url(loginUrl)

        username.waitForDisplayed(5000);
        await username.setValue('automation');
        password.waitForDisplayed(5000);
        await password.setValue('123456');

        await browser.pause(2000);
    });
});