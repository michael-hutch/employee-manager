module.exports = {
    beforeEach : browser => {
        let page = browser.page.pageObjects()
        page.navigate()
    },
    after : browser => {
        browser.end()
    },
    'Error Message' : browser => {
        let page = browser.page.pageObjects()
    page
        .click('@employee1')
        .clearValue('@phoneNumberField')
    page
        .click('@saveButton')
        .expect.element('@phoneNumberField').to.have.css('border-bottom', '#c00')
    }
}