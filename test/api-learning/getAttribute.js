describe('API Learning', function () {

    let pageUrl = "http://the-internet.herokuapp.com/login";

    it('Get Attribute for username text box', async function () {
        await browser.url(pageUrl);

        let username = await $("#username");

        //username.waitForDisplayed(5000);
        let typeAtt = username.getAttribute('type');
        let nameAtt = username.getAttribute('name');
        let idAtt = username.getAttribute('id');

        await console.log('Type: ', typeAtt);
        await console.log('Name: ', nameAtt);
        await console.log('Id: ', idAtt);

        await browser.pause(2000);


    });
});