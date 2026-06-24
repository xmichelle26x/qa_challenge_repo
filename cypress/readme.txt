QA Challenge – Instrucciones de ejecución

1. Clonar el repositorio:
   git clone https://github.com/xmichelle26x/qa_challenge_repo

2. Entrar al proyecto:
   cd qa_challenge_repo

3. Instalar dependencias:
   npm install

4. Ejecutar pruebas E2E en modo interactivo:
   npx cypress open

5. Ejecutar pruebas E2E en modo headless:
   npx cypress run

Notas:
- El flujo automatizado cubre login, agregar productos, checkout y confirmación.
- Los Page Objects están en la carpeta cypress/pages/.
