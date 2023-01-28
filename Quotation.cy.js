describe('Quotation', () => {
    it('RequestQuotation', () => {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get ('#ui-id-2').click()
        cy.get('#quotation_breakdowncover').select(2)
        cy.get('#quotation_incidents').type('ABC')
        cy.get('#quotation_vehicle_attributes_registration').type('123456')
        cy.get('#quotation_vehicle_attributes_mileage').type('67')
        cy.get('#quotation_vehicle_attributes_value').type('787')
        cy.get('#quotation_vehicle_attributes_parkinglocation').select(3)
        cy.get('#quotation_vehicle_attributes_policystart_1i').select(6)
        cy.get('#quotation_vehicle_attributes_policystart_2i').select(4)
        cy.get('#quotation_vehicle_attributes_policystart_3i').select(6)
        cy.get("input.btn.btn-success[value='Save Quotation']").click()
      })
  
      it('RetrieveQuotation', () => {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get ('#ui-id-3').click()
        cy.get("[placeholder='identification number']").type('20615')
        cy.get('#getquote').click()
     })
    })