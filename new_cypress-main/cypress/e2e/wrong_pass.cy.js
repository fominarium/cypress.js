describe('Тесты на авторизацию', function () {
   it('Неправильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru'); //найти поле логин, ввести логин
        cy.get('#loginButton').should('be.disabled'); // найти кнопку Войти, проверить что она не активна
        cy.get('#pass').type('iLoveqastudio2'); //найти поле пароль, ввести пароль
        cy.get('#loginButton').should('be.enabled'); //проверить, что кнопка активна
        cy.get('#loginButton').click(); //нажать на кнопку Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton').should('be.visible')
       

    })   
})
