describe('Menampilkan Detail Sebuah Activity', () => {
    it('Menampilkan Detail Activity', () => {
        // Access URL
        cy.mainURL();
        // Add New Activity
        cy.tambahActivity();
        // Click Activity to see the details
        cy.get('[data-cy="activity-item"]')
            .eq(0) // Activity Array Position
            .should('exist') // Assert New Activity
            .click();
        // Assert Tambah Button is Exist
            cy.get('[data-cy="todo-add-button"]')
            .should('exist');
        // Assert Item List or Empty State is Exist
        cy.get('[data-cy="todo-empty-state"]')
            .should('exist');
    })
    
})