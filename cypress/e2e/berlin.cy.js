require('cypress-xpath');

describe('open berlin.de and check for termin', () => {

    it('book termin', () => {
        cy.visit("https://service.berlin.de/dienstleistung/305244/en/");
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.get("a[class='termin-buchen']")
            .click();
        cy.xpath("//*[text()='Book Appointment']")
            .click();
        cy.get("input[name='gelesen'")
            .click()
            .xpath("//*[text()='Next']").click();
        cy.get("select[name='sel_staat']")
            .select("436")
        cy.get("select[name='personenAnzahl_normal']")
            .select("one person")
        cy.get("select[name='sel_staat']")
            .select("436")
        cy.get("select[name='personenAnzahl_normal']")
            .select("one person")
        cy.get("select[name='lebnBrMitFmly']")
            .select("no");
        cy.wait(1000)
        cy.get("select[name='lebnBrMitFmly']")
            .select("no");
        cy.wait(1000)
        cy.get("label[for='SERVICEWAHL_EN3436-0-1']")
            .click();
        cy.wait(1000)
        cy.get("label[for='SERVICEWAHL_EN_436-0-1-1']")
            .click().wait(2000)
        cy.get("label[for='SERVICEWAHL_EN436-0-1-1-324659']")
            .click().wait(3000)
        cy.xpath("//*[text()='Next']").click()

        // cy.get("[class='errorMessage']")
        //     .should('be.visible')
        //     .should('not.have.text', "There are currently no dates available for the selected service! Please try again later.")
        cy.get("li[class*='antcl_active'] span")
            .should('have.text', "Date selection")

        cy.readFile('school-fire-alarm-loud-beepflac-14807.mp3', 'base64').then((mp3) => {
            const uri = 'data:audio/mp3;base64,' + mp3
            const audio = new Audio(uri)
            audio.play()
            cy.wait(900000)
        })
    })
})