describe('API Learning', function () {

    let pageUrl = "http://the-internet.herokuapp.com/dropdown";

    it('Handle Dropdown Value', async function () {
    let dropdownSelector = await $("#dropdown");

        await browser.url(pageUrl);
        dropdownSelector.waitForDisplayed(5000);
        await dropdownSelector.selectByVisibleText('Option 1');

        await browser.pause(2000);

        await dropdownSelector.selectByAttribute('value', '2');

        await browser.pause(2000);


        await dropdownSelector.selectByIndex(1);

        await browser.pause(2000);


    });
});