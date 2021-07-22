describe('MEC Frontend Tests', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('Load Home Page', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Load About Page', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000/about');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Inputing Data into table', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000');
    cy.get('.ml-8 > .font-medium > .mb-6').clear();
    cy.get('.ml-8 > .font-medium > .mb-6').type('20');
    cy.get('.flex-auto > :nth-child(1)').click();
    cy.get('.flex-auto > :nth-child(2)').click();
    cy.get('.flex-auto > :nth-child(3)').click();
    cy.get('tbody > :nth-child(1) > .text-md > .mb-6').clear();
    cy.get('tbody > :nth-child(1) > .text-md > .mb-6').type('Test Meeting Title');
    cy.get(':nth-child(2) > .text-md > .mb-6').clear();
    cy.get(':nth-child(2) > .text-md > .mb-6').type('Test Comment');
    cy.get('#headlessui-switch-1').click();
    cy.get('[style=""] > .text-md > .mb-6').clear();
    cy.get('[style=""] > .text-md > .mb-6').type('25');
    cy.get('.mt-4 > .delay-50').click();
    /* ==== End Cypress Studio ==== */
  });
})

