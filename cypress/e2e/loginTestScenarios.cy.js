/// <reference types="cypress-xpath" />
import LoginPage from '../PageObjects/LoginPage'
describe('Login Test Scenarios', () => {

    const loginpage = new LoginPage()

    before(() => {
        cy.visit('https://www.hsbc.co.in/')
        cy.viewport(1200, 664)
    })

    it('Login Checks', () => {
        
        loginpage.validateLogo()
        loginpage.validateHomePageTitle()
        loginpage.clickLoginButton()
        loginpage.validateLogOnHeader()
        loginpage.validateContinueButton()
        loginpage.typeRandomEmail()
        loginpage.validateContinueButtonEnabled()
        loginpage.validateRememberMeCheckbox()
        loginpage.clickQuestionMarkTooltip()
        loginpage.validateUsernameHeaderInPopup()
        loginpage.validateCloseButtonInPopup()
    })
})
