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

## 2. API Testing (PetStore)

- **Framework:** Karate DSL  
- **API:** [Swagger PetStore](https://petstore.swagger.io/)  
- **Flujo cubierto (CRUD de usuario):**
  1. Crear un usuario
  2. Buscar el usuario creado
  3. Actualizar nombre y correo
  4. Buscar el usuario actualizado
  5. Eliminar el usuario

### Escenarios adicionales (valor agregado)
- Eliminar usuario inexistente → devuelve `404`  
- Buscar usuario eliminado → devuelve `404`  
- Crear usuario con datos inválidos → la API devuelve `200` en lugar de `400`  
  - Observación: Swagger UI muestra mensajes de validación, pero la API no refleja esos errores en el response.  
- Crear usuario sin `userStatus` → la API lo acepta y devuelve `200`

### Estructura del proyecto
```plaintext
petstore-karate/
├── src/test/resources/com/mishell/user.feature
├── src/test/java/com/mishell/UserTest.java
├── pom.xml
└── target/karate-reports/karate-summary.html

### Ejecución
1. Instalar dependencias con Maven:
   ```bash
   mvn clean test
   ```

2. Revisar el reporte HTML generado en:
   ```bash
   target/karate-reports/karate-summary.html
   ```