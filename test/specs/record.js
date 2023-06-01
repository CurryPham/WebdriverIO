describe('Record', () => {
    
    it('Test My Frist', async () => {
        
        await browser.setWindowSize(764, 689)
        await browser.url("http://the-internet.herokuapp.com/login")
        await expect(browser).toHaveUrl("http://the-internet.herokuapp.com/login")
        await browser.$("//*[@id=\"content\"]/div/h4/em[1]").douleClick()
        await browser.performAction([{
            type: 'key',
            id: 'keyboard',
            action: [{ type: 'keyDown', value: ''}]
        }])
        await browser.performAction([{
            type: 'key',
            id: 'keyboard',
            action: [{ type: 'keyDown', value: ''}]
        }])
        await browser.$("#password").click()
        await browser.$("#password").setValue("SuperSecretPassword!")
        await browser.$("//*[@id=\"login\"]/button/i").click()
        await expect(browser).toHaveUrl("http://the-internet.herokuapp.com/secure")
        await browser.$("text/Logout").click()
        await expect(browser).toHaveUrl("http://the-internet.herokuapp.com/login")
    });
});