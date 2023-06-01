describe('API Learning', function () {

    let pageUrl = "http://the-internet.herokuapp.com/dropdown";
    let currentUrl
    let currentTitle

    it('Get Text', async function () {

        await browser.url(pageUrl);
        currentUrl = await browser.getUrl();
        currentTitle = await browser.getTitle();

        await console.log('Current URL: ', currentUrl);
        await console.log('Current Title: ', currentTitle);

        await browser.pause(2000);


    });
});