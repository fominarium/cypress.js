describe('Тесты на авторизацию', function () {
   it('Правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru'); //найти поле логин, ввести логин
        cy.get('#loginButton').should('be.disabled'); // найти кнопку Войти, проверить что она не активна
        cy.get('#pass').type('iLoveqastudio1'); //найти поле пароль, ввести пароль
        cy.get('#loginButton').should('be.enabled'); //проверить, что кнопка активна
        cy.get('#loginButton').click(); //нажать на кнопку Войти
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик


    })   
})
