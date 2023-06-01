describe('API Learning', function () {

    let pageUrl = "http://the-internet.herokuapp.com";

    it('Get Color CSS Value', async function () {
        await browser.url(pageUrl);

        let highlightText =  await $("h1");

        highlightText.waitForDisplayed(5000);
        let colorValue = await highlightText.getCSSProperty('color');

        await console.log(colorValue.parsed.hex);

        await browser.pause(2000);


    });
});