/// <reference types= "cypress"/>

describe('teste funcional de login', () => {
  it('deve realizar o login com sucesso', () => {
    cy.login_teste('standard_user','secret_sauce')
    cy.get('[data-test="title"]').should('contain','Products')
    
    
  });
  it('validando login incorreto', () => {
    cy.login_teste('incorreto','secret_sauce')
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    
    
  });
  it('validando senha incorreta', () => {
    cy.login_teste('standard_user','incorreta')
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
   
    
  });

});


