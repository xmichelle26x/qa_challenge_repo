QA Challenge - Pruebas de API con Karate

REQUISITOS:
- JDK 17 instalado y configurado en JAVA_HOME
- Apache Maven 3.9.16 instalado y agregado al PATH
- Conexión a internet (para acceder a PetStore API)

INSTRUCCIONES DE EJECUCIÓN:
1. Clonar o descargar este repositorio.
2. Abrir una terminal en la carpeta raíz del proyecto (petstore-karate).
3. Ejecutar el comando:
   mvn clean test
4. Al finalizar, revisar el reporte HTML generado en:
   target/karate-reports/karate-summary.html

ESTRUCTURA DEL PROYECTO:
- src/test/resources/com/mishell/user.feature -> Escenarios CRUD de usuario en PetStore
- src/test/java/com/mishell/UserTest.java -> Runner de Karate
- pom.xml -> Dependencias y configuración de Maven

ESCENARIOS IMPLEMENTADOS:
1. Crear un usuario
2. Buscar el usuario creado
3. Actualizar nombre y correo
4. Buscar el usuario actualizado
5. Eliminar el usuario
6. Eliminar un usuario inexistente
7. Crear un usuario con datos inválidos
