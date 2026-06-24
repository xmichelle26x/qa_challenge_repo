# QA Challenge – E2E y API Testing

Este repositorio contiene la resolución del reto práctico de QA, dividido en dos partes:

## 1. End-to-End Automation (E2E)

- Framework: Cypress con Page Object Model (POM).
- Sitio: [Saucedemo](https://www.saucedemo.com/).
- Flujo cubierto:
  1. Login con usuario `standard_user` y password `secret_sauce`.
  2. Agregar dos productos al carrito.
  3. Visualizar el carrito.
  4. Completar el formulario de compra.
  5. Finalizar la compra hasta la confirmación: **"Thank you for your order!"**.

### Estructura
```plaintext
cypress/
├── e2e/purchase_flow.cy.js
├── pages/
│   ├── loginPage.js
│   ├── productsPage.js
│   ├── cartPage.js
│   └── checkoutPage.js
├── support/
│   └── commands.js
```

### Ejecución
1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Abrir Cypress en modo interactivo:
   ```bash
   npx cypress open
   ```

3. Ejecutar en modo headless:
   ```bash
   npx cypress run
   ```
