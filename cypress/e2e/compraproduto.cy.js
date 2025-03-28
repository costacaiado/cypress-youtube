/// <reference types= "cypress"/>
describe('teste E2E - realizando a compra dos produtos com sucesso', () => {
    it('fluxo de compra de produtos ', () => {
      cy.login_teste('standard_user','secret_sauce');
    cy.get('[data-test="title"]').should('contain','Products')
    // ordenação de produtos de menor para o maior valor:
    cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')
    //validação de ordenação dos produtos
    cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Backpack')
    cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
    cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt')
     
    // adicionando produtos ao carinho:
    cy.contains('Sauce Labs Backpack').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

    cy.contains('Sauce Labs Bike Light').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

    cy.contains('Sauce Labs Bolt T-Shirt').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

    // checagem da quantidade de produtos no carinho:
    cy.get('.shopping_cart_link').should('have.text', '3')

    // checkout dos produtos no carrinho:
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.verificaProdutos()
    // checkout
    cy.get('[data-test="checkout"]').click()
     
    // preenchimento dos dados do formulário de checkout:
    cy.get('[data-test="firstName"]').type('teste primeiro nome')
    cy.get('[data-test="lastName"]').type('teste sobrenome')
    cy.get('[data-test="postalCode"]').type('123456789')
    cy.get('[data-test="continue"]').click()
    // verificando produtos do chekout:
    cy.verificaProdutos()
    //checagem do valor total:
    cy.get('[data-test="total-label"]').should('contain', '$60.45')
    cy.get('[data-test="finish"]').click()

    cy.get('[data-test="complete-header"]').should('have.text','Thank you for your order!')

    
    });

});  