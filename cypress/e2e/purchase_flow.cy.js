import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';

describe('Flujos completos en Saucedemo', () => {
  
  beforeEach(() => {
    LoginPage.visit();
  });

  // 🔑 LOGIN FLOWS
  it('Login exitoso con credenciales válidas', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('Error con credenciales inválidas', () => {
    LoginPage.login('wrong_user', 'wrong_password');
    LoginPage.getErrorMessage()
      .should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Error con usuario bloqueado', () => {
    LoginPage.login('locked_out_user', 'secret_sauce');
    LoginPage.getErrorMessage()
      .should('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });

  // 🔑 CHECKOUT FLOWS
  it('Completar compra E2E', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    ProductsPage.addBackpack();
    ProductsPage.addBikeLight();
    CartPage.openCart();
    CartPage.checkout();
    CheckoutPage.fillForm('Mishell', 'Angulo', '090101');
    CheckoutPage.finish();
    cy.contains('Thank you for your order!').should('be.visible');
  });

  it('Error si falta First Name', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    ProductsPage.addBackpack();
    CartPage.openCart();
    CartPage.checkout();
    CheckoutPage.fillForm('', 'Angulo', '090101');
    CheckoutPage.getErrorMessage().should('contain', 'Error: First Name is required');
  });

  it('Error si falta Last Name', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    ProductsPage.addBackpack();
    CartPage.openCart();
    CartPage.checkout();
    CheckoutPage.fillForm('Mishell', '', '090101');
    CheckoutPage.getErrorMessage().should('contain', 'Error: Last Name is required');
  });

  it('Error si falta Postal Code', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    ProductsPage.addBackpack();
    CartPage.openCart();
    CartPage.checkout();
    CheckoutPage.fillForm('Mishell', 'Angulo', '');
    CheckoutPage.getErrorMessage().should('contain', 'Error: Postal Code is required');
  });
});
