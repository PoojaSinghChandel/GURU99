describe('Login Page', () => {
    it('LoginFailure', () => {
      cy.visit('https://demo.guru99.com/insurance/v1/index.php')
      cy.get('#email').type('123@gmail.com')
      cy.get('#password').type('')
      cy.get("input.btn.btn-default[value='Log in']").onclick="validateLogin();";
    })

    it('LoginSuccess', () => {
      cy.visit('https://demo.guru99.com/insurance/v1/index.php')
      cy.get('#email').type('poojasingh1614@gmail.com')
      cy.get('#password').type('123456')
      cy.get("input.btn.btn-default[value='Log in']").onclick="validateLogin();"
      })

      it('LogOut', () => {
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
          cy.get("input.btn.btn-danger[value='Log out']").click()
          })
     
    
    function validateLogin (){
        cy.get()
      }
      //cy.url().should('eq', "https://demo.guru99.com/insurance/v1/header.php")
    })

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