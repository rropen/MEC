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
    cy
      .get('.ml-8 > .font-medium > .mb-6')
      .clear();
    cy
      .get('.ml-8 > .font-medium > .mb-6')
      .type('2000');
    cy
      .get('.flex-auto > :nth-child(1)')
      .click();
    cy
    .wait(100)
      .get('.flex-auto > :nth-child(2)')
      .click();
    cy
      .get('tbody > :nth-child(1) > .text-md > .mb-6')
      .clear();
    cy
      .get('tbody > :nth-child(1) > .text-md > .mb-6')
      .type('Test Meeting Title');
    cy
      .get(':nth-child(2) > .text-md > .mb-6')
      .clear();
    cy
      .get(':nth-child(2) > .text-md > .mb-6')
      .type('Test Comment');
    cy
      .get('#headlessui-switch-1')
      .click();
    cy
      .get('[style=""] > .text-md > .mb-6')
      .clear();
    cy
      .get('[style=""] > .text-md > .mb-6')
      .type('25');
    cy
      .get('.mt-4 > .delay-100')
      .click();
    cy
      .get('.flex-auto > :nth-child(3)')
      .click();
    cy
      .get(':nth-child(1) > .text-rrpink-600')
      .contains('0')
    });

  it('Verify Data in table', function() {
    // cy
    //   .get(':nth-child(3) > .p-column-header-content > .p-column-title')
    //   .click();
    // cy
    //   .get('.p-highlight > .p-column-header-content > .p-column-title')
    //   .click();
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(1)')
      .contains('Test Meeting Title')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)')
      .contains('Test Comment')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(4)')
      .contains('2000')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(5)')
      .contains('1')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(6)')
      .contains('true')
    cy 
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(7)')
      .contains('25')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(8)')
      .contains('1')
  });
  it('Verify Header 30 Days', function() {

  })
  it('Past Meeting Test', function() {
    cy
      .get('.flex > .delay-100')
      .click();
    cy
      .get('#title')
      .clear();
    cy
      .get('#title')
      .type('Past Meeting Title Test');
    cy
      .get('#meetingDate')
      .clear();
    cy
      .get('#meetingDate')
      .type('2021-01-22');
    cy
      .get('#comment')
      .clear();
    cy
      .get('#comment')
      .type('Past Meeting Test Comment');
    cy
      .get('#employeeNumber')
      .clear();
    cy
      .get('#employeeNumber')
      .type('12');
    cy
      .get('#minutes')
      .clear();
    cy
      .get('#minutes')
      .type('60');
    cy
      .get('#headlessui-switch-2')
      .click();
    cy
      .get('#numSlides')
      .clear();
    cy
      .get('#numSlides')
      .type('25');
    cy
      .get('.flex-col > .flex > .bg-rrblue-400')
      .click();
  });
  it('Verify Past Meeting Data in table', function() {
    // cy
    //   .get(':nth-child(3) > .p-column-header-content > .p-column-title')
    //   .click();
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(1)')
      .contains('Past Meeting Title Test')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)')
      .contains('Past Meeting Test Comment')
    cy 
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(3)')
      .contains('21 Jan 2021')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(4)')
      .contains('12')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(5)')
      .contains('60')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(6)')
      .contains('true')
    cy 
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(7)')
      .contains('25')
    cy
      .get('.p-datatable-tbody > :nth-child(1) > :nth-child(8)')
      .contains('1620')
    // // This deletes the data
    // cy 
    //   .get(':nth-child(1) > :nth-child(9) > .p-button > .pi')
    //   .click()
    // cy
    //   .get('.bg-rrpink-400')
    //   .click()
  });

  it('Verify Statistics Total', function() {
    cy.visit('localhost:3000');

    cy
    .get('.px-6 > .mt-1 > .flex')
    .contains('30.5')
    cy
    
    .get(':nth-child(2) > .mt-1 > .flex')
    .contains('61')
    // This value changes slightly
    cy
    .get(':nth-child(3) > .mt-1 > .flex')
    .contains('162')
    // This value changes slightly
    cy
    .get(':nth-child(4) > .mt-1 > .flex')
    .contains('81')
    cy
    .get(':nth-child(5) > .mt-1 > .flex')
    .contains('50')
    })

  it('Verify Statistics 30 Days', function() {
    cy
    .get('.grid-cols-2 > :nth-child(2)')
    .click();
    cy
    .get(':nth-child(2) > .mt-1 > .flex')
    .contains('1')
    cy
    .get(':nth-child(3) > .mt-1 > .flex')
    .contains('1.')
    cy
    .get(':nth-child(5) > .mt-1 > .flex')
    .contains('25')

  })

  
})

