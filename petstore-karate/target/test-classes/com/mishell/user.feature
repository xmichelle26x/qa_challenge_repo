Feature: Pruebas de API de usuarios en PetStore

  Scenario: Crear un usuario
    Given url 'https://petstore.swagger.io/v2/user'
    And request { "id": 1, "username": "mishell", "firstName": "Mishell", "lastName": "Angulo", "email": "mishell@test.com", "password": "12345", "phone": "0999999999" }
    When method post
    Then status 200

  Scenario: Buscar el usuario creado
    Given url 'https://petstore.swagger.io/v2/user/mishell'
    When method get
    Then status 200
    And match response.username == 'mishell'

  Scenario: Actualizar nombre y correo
    Given url 'https://petstore.swagger.io/v2/user/mishell'
    And request { "id": 1, "username": "mishell", "firstName": "Mishu", "lastName": "Angulo", "email": "mishu@test.com", "password": "12345", "phone": "0999999999" }
    When method put
    Then status 200

  Scenario: Buscar el usuario actualizado
    Given url 'https://petstore.swagger.io/v2/user/mishell'
    When method get
    Then status 200
    And match response.firstName == 'Mishu'
    And match response.email == 'mishu@test.com'

  Scenario: Eliminar el usuario
    Given url 'https://petstore.swagger.io/v2/user/mishell'
    When method delete
    Then status 200