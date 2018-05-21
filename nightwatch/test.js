module.exports = {
    beforeEach : browser => {
        let page = browser.page.pageObjects()
        page.navigate()
    },
    after : browser => {
        browser.end()
    },
    'name input' : browser => {
        let page = browser.page.pageObjects()
        page
           .click('@employee1') 
           .expect.element('@nameField').value.to.equal('Bernice Oritz')
           .expect.element('@phoneNumberField').value.to.equal('4824931093')
           .expect.element('@titleField').value.to.equal('CEO')
        
    }
}