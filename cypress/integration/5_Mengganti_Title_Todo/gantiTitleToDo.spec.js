describe('Mengganti Title ToDo', () => {
    it('Mengganti Title ToDo', () => {
        // Access URL
        cy.mainURL();
        // Add New Activity
        cy.get('[data-cy="activity-item"]')
            .eq(0) // Activity Array Position
            .should('exist') // Assert New Activity
            .click();
        // Assert Tambah Button is Exist
        cy.get('[data-cy="todo-add-button"]')
            .should('exist');
        // Item List or Empty State is Exist
        cy.get('[data-cy="todo-empty-state"]')
            .should('exist');
        // Access Title ToDo
        cy.get('[data-cy="todo-title"]')
            .click({force:true}).focused().clear()
            .type('Fungsional Pengujian', {force:true})
            .should('have.value', 'Fungsional Pengujian');
        cy.get('[data-cy="todo-title-edit-button"]', {force: true})
            .click({force: true});
        // Click Back Button
        cy.get('[data-cy="todo-back-button"]', {force:true})
        .click({force:true});
        // Assert For Check The New Title
        cy.get('[data-cy="activity-item-title"]', {force: true})
            .eq(0)
            .should('contain.text', 'Fungsional Pengujian');
        // Wait to pending time (Presentation Purpose)
        cy.wait(1500);
    })
    
})