it('doesnt work again', () => {
  expect(44).to.equal(21 + 21)
  cy.visit('https://example.cypress.io')
})

it('doesnt work', () => {
  expect(43).to.equal(21 + 21)
  cy.visit('https://example.cypress.io')
})
