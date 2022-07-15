/// <reference types="cypress" />

///Describing the test suite
describe('First Test Suite', function()
{

///Create the test case
it('First Test', function() 
{

///Access web page
cy.visit('/index.html') 

///Click and watch the “watch intro” video & close the video using the close button at top right corner.
cy.get('.video-button').click({force: true})
cy.wait(4000)
cy.get('#Layer_1').click({force: true})

///Click contact menu in nav bar to navigate.
cy.get('.menu-bar > .lni').click()
cy.wait(2000)
cy.get('.close > .lni').click()

///Enter the sample data in “Get Started” form and click submit.
cy.get('.inner-content > .light-rounded-buttons > .btn').click({force: true})
cy.wait(2000)
cy.get('.contact-form:visible')
{   
cy.get('input[name="name"]').click({ force: true }).type('Ravikanth')
cy.get('input[name="email"]').click({ force: true }).type('Ravikanth@gmail.com')
cy.get('input[name="phone"]').click({ force: true }).type('9876543211')
cy.get('input[name="subject"]').click({ force: true }).type('Request for Credentials')
cy.get('textarea[name="message"]').click({ force: true }).type('Hi, please consider the request for my credentials for the provided shared application to use further')
cy.contains('Send Message')
}

///Assertions
cy.get('.single-news').find('.content-body').should('have.length',3)
cy.get('.single-news').should('contain.text','Make your team a Design driven company')
cy.get('.single-news').should('contain.text','The newest web framework that changed the world')
cy.get('.single-news').should('contain.text','5 ways to improve user retention for your startup')

///checking footer in html and couldn't find header
cy.get('footer').should('exist').then(function()
{
console.log('footer')    
})

})
})
