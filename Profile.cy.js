describe('Profile', () => {
    it('Profile', () => {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get ('#ui-id-4').click()
    })

    it('EditProfile', () => {
      cy.visit('https://demo.guru99.com/insurance/v1/header.php')
      cy.get ('#ui-id-5').click()
      cy.get('#user_title').select(3)
      cy.get('#user_surname').type('Singh')
      cy.get('#user_firstname').type('Pooja')
      cy.get('#user_phone').type(1234567890)
      cy.get('#user_dateofbirth_1i').select(8)
      cy.get('#user_dateofbirth_2i').select(5)
      cy.get('#user_dateofbirth_3i').select(8)
      cy.get('#user_licencetype_t').click()
      cy.get('#user_licenceperiod').select(2)
      cy.get('#user_occupation_id').select(5)
      cy.get('#user_address_attributes_street').type('ABC')
      cy.get('#user_address_attributes_city').type('FGH')
      cy.get('#user_address_attributes_county').type('XYZ')
      cy.get('#user_address_attributes_postcode').type('120021')
      cy.get("input.btn.btn-success[value='Update User']").onclick="updateInfo();getUser();return false;"
  })
})