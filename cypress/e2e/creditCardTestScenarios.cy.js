/// <reference types="cypress-xpath" />
import CreditCardPage from "../PageObjects/CreditCardPage"
describe('Credit Card Test Scenarios', () => {

    const credit = new CreditCardPage()

    before(() => {
        cy.visit('https://www.hsbc.co.in/')
        cy.viewport(1200, 800)
    })

    it('Credit Card Flow Checks', () => {

    credit.hoverOnBankingMenu()
    credit.clickCreditCardsLink()
    credit.validateCreditCardHeader()
    credit.validateApplyNowButton()
    credit.validateCreditCardOptionsCount()
    credit.validateFirstCreditCardImage()
    credit.validateFirstCreditCardButtons()
    credit.clickFirstCreditCardCompareButton()
    credit.validateComparePopup()
    credit.selectCreditCardsToCompare()
    credit.clickCompareButton()
    credit.validateSelectedCreditCards()
    credit.addThirdCreditCardToCompare()
    credit.validateThreeSelectedCreditCards()
    credit.clickRemoveLink()
    credit.validateTwoCreditCardOptions()
    credit.clickAddCardLink()
    credit.clickCloseButtonInPopup()
    credit.validatePopupClosure()
    })
})