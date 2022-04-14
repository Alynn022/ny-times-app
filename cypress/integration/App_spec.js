/// <reference types="cypress" />

describe('App', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jZ22oxAqRk631nZBDXRLnp6M5ckIfb2F', 
    {
      fixture: 'sampleData.json'
    })
    .visit('http://localhost:3000/')
  })

  it('should display home page', () => {
    cy.get('h1').should('have.text', 'Top Stories from The New York Times')
      .get('.tabs-container').should('exist')
      .get('.tabs').should('have.text', '| world | ')
      .get('.articles-container').should('exist')
      .get('.0').should('exist')
      .get('.article-title').should('have.text', 'Despite Russian Warnings, Finland and Sweden Draw Closer to NATO')
  })
  it('should display article details', () => {
    cy.get('.0').click()
      .get('h1').should('have.text', 'Top Stories from The New York Times')
      .get('h2').should('have.text', 'Despite Russian Warnings, Finland and Sweden Draw Closer to NATO')
      .get('.abstract').should('have.text', 'The invasion of Ukraine has heightened security fears, pushing even formally nonaligned countries toward the Western alliance.' )
  })
  it('should display error page with status 404', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jZ22oxAqRk631nZBDXRLnp6M5ckIfb2F', 
    {
      fixture: 'sampleData.json'
    })
      .visit('http://localhost:3000/unknown')
      .get('.error-page').should('exist')
  })

  it('should be able to filter based on sorted tab', () => {
    cy.visit('http://localhost:3000/tab/world')
      .intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jZ22oxAqRk631nZBDXRLnp6M5ckIfb2F', 
    {
      fixture: 'sampleData.json'
    })
      .get('.article-result').should('have.text', 'Article results for: world')
      .get('.filtered-title').should('have.text', 'Despite Russian Warnings, Finland and Sweden Draw Closer to NATO')
  })
  it('should be able to view more details from filtered list', () => {
    cy.visit('http://localhost:3000/tab/world')
      .intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jZ22oxAqRk631nZBDXRLnp6M5ckIfb2F', 
    {
      fixture: 'sampleData.json'
    })
    .get('.0').click()
    .get('h1').should('have.text', 'Top Stories from The New York Times')
    .get('h2').should('have.text', 'Despite Russian Warnings, Finland and Sweden Draw Closer to NATO')
    .get('.abstract').should('have.text', 'The invasion of Ukraine has heightened security fears, pushing even formally nonaligned countries toward the Western alliance.' )
  })
})
