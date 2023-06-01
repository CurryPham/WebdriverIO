const LoginPage = require('../pageobjects/login.page');

describe('Demo Test', () => {
    
    it('Test 1', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await LoginPage.checkMsg('You logged into a secure area!');
    });
});