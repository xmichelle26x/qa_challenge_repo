class CartPage {
  openCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }

  checkout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default new CartPage();
