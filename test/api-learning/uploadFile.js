let path = require('path');

describe('API Learning', function () {

    let pageUrl = "http://the-internet.herokuapp.com/upload";

    it('Handle Alert', async function () {

        await browser.url(pageUrl);
        let chooseFile = await $('#file-upload');
        let uploadFile = await $('#file-submit');

        let fileToUpload = await path.join(__dirname, './upload');
        // chooseFile.waitForDisplayed(5000);
        await chooseFile.setValue(fileToUpload);

        await uploadFile.click();

        await browser.pause(2000);


    }); 
});