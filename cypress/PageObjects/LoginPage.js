class LoginPage {
    validateLogo() {
        return cy.xpath("//img[@alt='HSBC India Bank']").first().should('be.visible')
    }

    validateHomePageTitle() {
        return cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')
    }

    clickLoginButton() {
        return cy.xpath("//a[@class='selected-item login-button only-one-link']").first().click()
    }

    validateLogOnHeader() {
        return cy.xpath("//div[@class='header-top-container hide-on-mobile-and-tablet']").should('be.visible')
    }

    validateContinueButton() {
        return cy.xpath("//button[@id='username_submit_btn']").should('be.visible').and('be.disabled')
    }

    typeRandomEmail() {
        cy.fixture('example').then((example) => {
            cy.xpath("//input[@id='username']").type(example.emailid)
        })
    }

    validateContinueButtonEnabled() {
        return cy.xpath("//button[@id='username_submit_btn']").should('be.enabled')
    }

    validateRememberMeCheckbox() {
        return cy.xpath("//input[@id='rememberMe']").should('not.be.checked')
    }

    clickQuestionMarkTooltip() {
        return cy.xpath("//span[@class='icon icon-circle-help-solid help-icon']").should('be.visible').click()
    }

    validateUsernameHeaderInPopup() {
        return cy.xpath("//div[@id='help_content_1']/h3/span").should('be.visible')
    }

    validateCloseButtonInPopup() {
        return cy.xpath("//span[@class='icon icon-delete']").should('be.visible').click()
    }
}

export default LoginPage;