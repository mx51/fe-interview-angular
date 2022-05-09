describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')

    cy.contains('Tuckshop Menu')

    cy.get('.menu-item').first().click()

    // Test order item appears
    cy.get('.order-category').should('exist');

  })
})
