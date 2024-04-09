class CreditCardPage {
    hoverOnBankingMenu() {
        cy.xpath("//li[@class='header-main-navigation-item']").first().trigger('mouseover')
        cy.wait(2000)
    }

    clickCreditCardsLink() {
        cy.xpath("//h2[@class='doormat-heading']").first().click()
    }

    validateCreditCardHeader() {
        cy.xpath("//div[@id='listing_intro_hero_banner_2']//h1").should('be.visible')
    }

    validateApplyNowButton() {
        cy.xpath("//a[@id='listing_intro_button_1']").should('be.visible')
    }

    validateCreditCardOptionsCount() {
        cy.xpath("//div[@class=' advancedProductModule']//h2").should('have.length', 3)
    }

    validateFirstCreditCardImage() {
        cy.xpath("//img[@id='listing_main_image_3']").should('have.attr', 'alt', 'HSBC Visa Cashback Credit Card')
    }

    validateFirstCreditCardButtons() {
        cy.xpath("//a[@id='listing_main_button_1']").should('be.visible')
        cy.xpath("//a[@id='listing_main_button_2']").should('be.visible')
        cy.xpath("//a[@id='listing_main_button_3']").should('be.visible')
    }

    clickFirstCreditCardCompareButton() {
        cy.xpath("//a[@id='listing_main_button_1']").click()
    }

    validateComparePopup() {
        cy.xpath("//button[@class='close-button']").should('be.visible')
        cy.xpath("//h2[@id='title-pp_tools_productComparator_4']").should('have.text', 'Select cards to compare')
        cy.xpath("//div/div[@class='tile-selector']").should('have.length', 3)
    }

    selectCreditCardsToCompare() {
        cy.xpath("//div[@class='modal-checkbox']").first().click()
        cy.xpath("(//div[@class='modal-checkbox'])[2]").click()
    }

    clickCompareButton() {
        cy.xpath("//div[@class='modal-button']/button").click()
    }

    validateSelectedCreditCards() {
        cy.xpath("//h2[@id='pp_tools_productComparator_2-title']").should('be.visible')
        cy.xpath("//h2[@id='pp_tools_productComparator_3-title']").should('be.visible')
        cy.xpath("//span[text()='Remove card']").should('have.length', 2)
    }

    addThirdCreditCardToCompare() {
        cy.xpath("(//div[@class='product-select add-product']//span)[1]").click()
        cy.xpath("(//div[@class='modal-checkbox'])[3]").click()
    }

    validateThreeSelectedCreditCards() {
        cy.xpath("(//div[@class='modal-checkbox'])[1]").should('be.visible')
        cy.xpath("(//div[@class='modal-checkbox'])[2]").should('be.visible')
        cy.xpath("(//div[@class='modal-checkbox'])[3]").should('be.visible')
    }

    clickRemoveLink() {
        cy.xpath("(//span[text()='Remove card'])[1]").click()
        cy.wait(2000);
    }

    validateTwoCreditCardOptions() {
        cy.xpath("//span[text()='Remove card']").should('have.length', 2)
    }

    clickAddCardLink() {
        cy.xpath("(//div[@class='product-select add-product']//span)[1]").click()
    }

    clickCloseButtonInPopup() {
        cy.xpath("//button[@class='close-button']").click()
    }

    validatePopupClosure() {
        cy.xpath("//div[@class='modal-dialog']").should('not.be.visible')
    }
}

export default CreditCardPage;