import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';

describe('Flujo de compra en Saucedemo', () => {
  it('Completar compra E2E', () => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');

    ProductsPage.addBackpack();
    ProductsPage.addBikeLight();

    CartPage.openCart();
    CartPage.checkout();

    CheckoutPage.fillForm('Mishell', 'Angulo', '090101');
    CheckoutPage.finish();

    cy.contains('Thank you for your order!').should('be.visible');
  });
});
