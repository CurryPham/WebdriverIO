describe('API Learning', function () {

    let pageUrl = "http://the-internet.herokuapp.com/login";

    it('Wait for disappeared', async function () {
        await browser.url(pageUrl);

        let username = await $("#username");
        let password = await $("#password");
        let buttonLogin = await $("//i[@class='fa fa-2x fa-sign-in']");

        await username.setValue('tomsmith');
        await password.setValue('SuperSecretPassword!');

        await buttonLogin.click();

        // buttonLogin.waitForDisplayed(5000, true, '[ERR] Login process takes longer th=an 5s')

        await browser.pause(2000);


    });
});