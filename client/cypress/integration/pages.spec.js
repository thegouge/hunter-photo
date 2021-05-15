/// <reference types="cypress" />

describe('pages', () => {
  it('all pages load properly', ()=>{
    cy.visit('')
    cy.visit('/about')
    cy.visit('/design')
    cy.visit('/photos')
    cy.visit('/twitch')
  })
})