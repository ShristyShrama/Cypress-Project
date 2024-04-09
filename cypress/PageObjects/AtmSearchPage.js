class ATMSearchPage {
    visitATMPage() {
        cy.get('footer').scrollIntoView()
        cy.xpath("//a[@href='/ways-to-bank/branches/']").last().click()
    }

    validateURL() {
        cy.url().should('include', '/ways-to-bank/branches/')
    }

    validateHeader() {
        cy.xpath("//div[@id='content_intro_hero_banner_2']//h1").should('be.visible')
    }

    clickBranchATMLocator() {
        cy.xpath("//a[@id='content_main_button_1']").click()
    }

    searchCountry() {
        cy.wait(10000)
        cy.fixture('example').then((example) => {
            cy.xpath("//input[@id='searchInput']").type(example.country).type('{enter}')

        })
    }

    validateATMHeader() {
        cy.wait(10000);
        cy.xpath("//p[@class='uItFVQvJsoQVBXhG5ERC']").should('contain', 'Rajbhavan Road')
    }

    showMoreResults() {
        cy.xpath("//button[@aria-label='Show more results']").click()
    }

    validateTooltipColor() {
        cy.xpath("(//span[@class='yWQITJvVOSElgOOsYgyM'][normalize-space()='2'])[1]").should('have.css', 'color', 'rgb(255, 255, 255)')
    }

    validateSocialMediaIcons() {
        cy.get('footer').scrollIntoView()
        cy.xpath("//a[@class='social-image social-icon-instagram']").should('be.visible')
        cy.xpath("//a[@class='social-image social-icon-facebook']").should('be.visible')
        cy.xpath("//a[@class='social-image social-icon-twitter']").should('be.visible')
        cy.xpath("//a[@class='social-image social-icon-youtube']").should('be.visible')
    }

    clickHSBCLogo() {
        cy.xpath("//img[@alt='HSBC India Bank']").first().click()
    }

    validateHomePageTitle() {
        cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')
    }

    clickPrivacyLink() {
        cy.get('footer').scrollIntoView()
        cy.xpath("//a[@href='/privacy-statement/']").last().should('be.visible').click()
    }

    validatePrivacyStatementHeader() {
        cy.xpath("//div[@id='content_intro_hero_no_image_1']/h1").should('be.visible')
    }
}

export default ATMSearchPage;