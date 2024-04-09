/// <reference types="cypress-xpath" />
import ATMSearchPage from "../PageObjects/AtmSearchPage"
describe('ATM Search Test Scenarios', () => {

    const atmsearch = new ATMSearchPage()

    before(() => {
        cy.visit('https://www.hsbc.co.in/')
        cy.viewport(1200, 800)
    })

    it('ATM Search Checks', () => {

        atmsearch.visitATMPage()
        atmsearch.validateURL()
        atmsearch.validateHeader()
        atmsearch.clickBranchATMLocator()
        atmsearch.searchCountry()
        atmsearch.validateATMHeader()
        atmsearch.showMoreResults()
        atmsearch.validateTooltipColor()
        atmsearch.validateSocialMediaIcons()
        atmsearch.clickHSBCLogo()
        atmsearch.validateHomePageTitle()
        atmsearch.clickPrivacyLink()
        atmsearch.validatePrivacyStatementHeader()
    })
})
