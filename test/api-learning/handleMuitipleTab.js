describe('API Learning', function () {

    let pageUrl = "https://webdriver.io/docs/api/html";

    it('Handle Multiple Windows', async function () {

        await browser.url(pageUrl);

        let editBtnSelector = await $('=Edit');
        


        await browser.pause(2000);


    }); 
});