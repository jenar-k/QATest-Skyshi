// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add('mainURL', () => {
    // cy.visit('https://todo-devcode.web.app/');
    // cy.visit('https://todo-4769a.web.app/');
    cy.visit('https://ivan-todo-devrank.netlify.app/');

    cy.viewport(1280, 800);
    cy.wait(3000);
    cy.url()
    // .should('include', 'https://todo-devcode.web.app/');
    // .should('include', 'https://todo-4769a.web.app/');
    .should('include', 'https://ivan-todo-devrank.netlify.app/');

    cy.get('[data-cy="header-title"]')
        .should('have.text', 'TO DO LIST APP'); //Assert header title
    cy.get('[data-cy="activity-title"]')
        .should('have.text', 'Activity'); //Assert Activity title
    cy.get('[data-cy="activity-add-button"]')
        .should('exist'); //Assert Add button must exist
    cy.wait(3000);
})


//Delete Activity
Cypress.Commands.add('hapusActivity', () => {
    // Click Trash Button on the first activity
    cy.get('[data-cy="activity-item-delete-button"]')
        .eq(0)
        .click();
    //Assert PopUp Delete
    cy.get('[data-cy="modal-delete"]')
        .should('exist');
    // Wait to pending time (Presentation Purpose)
    cy.wait(1500);
})        


//Delete ToDo
Cypress.Commands.add('hapusItemToDo', () => {
    // Select ToDo to be deleted by Click Trash Button
    cy.get('[data-cy="todo-item"]', {force:true})
        .eq(0)
        .find('[data-cy="todo-item-delete-button"]', {force:true})
        .click({force:true});
    // Assert PopUp Delete
    cy.get('[data-cy="modal-delete"]', {force:true})
        .should('exist');
    // Wait to pending time (Presentation Purpose)
    cy.wait(1500);
})


// Tambah Activity
Cypress.Commands.add('tambahActivity', () => {
    cy.get('[data-cy="activity-add-button"]')
        .click({force: true});
    cy.wait(1000);
    // Assert to check "New Activity" is success show on the list 
    cy.get('[data-cy="activity-item"]', {force: true})
        .eq(0)
        .should('contain.text', 'New Activity');
})


//Tambah Todo Item 1
Cypress.Commands.add('tambahToDOItem1', () => {
    // Click Tambah Button
    cy.get('[data-cy="todo-add-button"]')
        .click()
    // Assert PopUp Add New Item Todo is Exist
    cy.get('[data-cy="modal-add"]')
        .should('exist')
    // Give a Todo Name
    cy.get('[data-cy="modal-add-name-input"]')
        .type('a. Uji Menambahkan Activity di Aplikasi Berbasis Web App dengan nama ToDO List App')
    // Select Piority Very High
    cy.get('[data-cy="modal-add-priority-dropdown"]', {force:true})
        .click({force:true})
    cy.get('[data-cy="modal-add-priority-item"]', {force:true})
        .eq(0)
        .click({force:true});
    // Click Simpan Button
    cy.get('[data-cy="modal-add-save-button"]')
        .click();
    // Wait to pending time (Presentation Purpose)
    cy.wait(1000);
})


//Tambah Todo Item 2
Cypress.Commands.add('tambahToDOItem2', () => {
    // Click Tambah Button
    cy.get('[data-cy="todo-add-button"]')
        .click()
    // Give a Todo Name
    cy.get('[data-cy="modal-add-name-input"]')
        .type('b. Uji Menghapus Activity')
    // Select Piority High
    cy.get('[data-cy="modal-add-priority-dropdown"]', {force:true})
        .click({force:true})
    cy.get('[data-cy="modal-add-priority-item"]', {force:true})
        .eq(1)
        .click({force:true});
    // Click Simpan Button
    cy.get('[data-cy="modal-add-save-button"]')
        .click();
    // Wait to pending time (Presentation Purpose)
    cy.wait(1000);
})


//Tambah Todo Item 3
Cypress.Commands.add('tambahToDOItem3', () => {
    // Click Tambah Button
    cy.get('[data-cy="todo-add-button"]')
        .click()
    // Give a Todo Name
    cy.get('[data-cy="modal-add-name-input"]')
        .type('c. Uji Menampilkan Detail Activity')
    // Select Piority Low
    cy.get('[data-cy="modal-add-priority-dropdown"]', {force:true})
        .click({force:true})
    cy.get('[data-cy="modal-add-priority-item"]', {force:true})
        .eq(2)
        .click({force:true});
    // Click Simpan Button
    cy.get('[data-cy="modal-add-save-button"]')
        .click();
    // Wait to pending time (Presentation Purpose)
    cy.wait(1000);
})


//Tambah Todo Item 4
Cypress.Commands.add('tambahToDOItem4', () => {
    // Click Tambah Button
    cy.get('[data-cy="todo-add-button"]')
        .click()
    // Give a Todo Name
    cy.get('[data-cy="modal-add-name-input"]')
        .type('d. ToDo yang akan diselesaikan')
    // Select Piority Medium
    cy.get('[data-cy="modal-add-priority-dropdown"]', {force:true})
        .click({force:true})
    cy.get('[data-cy="modal-add-priority-item"]', {force:true})
        .eq(3)
        .click({force:true});
    // Click Simpan Button
    cy.get('[data-cy="modal-add-save-button"]')
        .click();
    // Wait to pending time (Presentation Purpose)
    cy.wait(1000);
})


//Tambah Todo Item 5
Cypress.Commands.add('tambahToDOItem5', () => {
    // Click Tambah Button
    cy.get('[data-cy="todo-add-button"]')
        .click()
    // Give a Todo Name
    cy.get('[data-cy="modal-add-name-input"]')
        .type('e. ToDo yang akan dihapus')
    // Select Piority Medium
    cy.get('[data-cy="modal-add-priority-dropdown"]', {force:true})
        .click({force:true})
    cy.get('[data-cy="modal-add-priority-item"]', {force:true})
        .eq(4)
        .click({force:true});
    // Click Simpan Button
    cy.get('[data-cy="modal-add-save-button"]')
        .click();
    // Wait to pending time (Presentation Purpose)
    cy.wait(1000);
})