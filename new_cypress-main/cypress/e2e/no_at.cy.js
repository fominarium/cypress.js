describe('Тесты на авторизацию', function () {
   it('Логин без собаки', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru'); //найти поле логин, ввести логин
        cy.get('#loginButton').should('be.disabled'); // найти кнопку Войти, проверить что она не активна
        cy.get('#pass').type('iLoveqastudio1'); //найти поле пароль, ввести пароль
        cy.get('#loginButton').should('be.enabled'); //проверить, что кнопка активна
        cy.get('#loginButton').click(); //нажать на кнопку Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton').should('be.visible')
       

    })   
})
