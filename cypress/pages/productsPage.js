class ProductsPage {
  addBackpack() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  addBikeLight() {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }
}

export default new ProductsPage();
