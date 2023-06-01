describe('Learning API', () => {

    it('Set value to a textbox', async () => {

        browser.url("https://the-internet.herokuapp.com/login");
        browser.pause(20000)

        let usernameSelector = await $("#username");
        await usernameSelector.setValue("Automation");

        await browser.pause(3000);
    });
});