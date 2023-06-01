describe('API Learning', function () {

    let pageUrl = "http://the-internet.herokuapp.com/dropdown";

    let currentText

    it('Get Text', async function () {
        let highlightText =  await $("h3");

        await browser.url(pageUrl);
        highlightText.waitForDisplayed(5000);
        currentText = highlightText.getText();

        await console.log(currentText);

        await browser.pause(2000);


    });
});