describe('Men-sortir Item ToDo', () => {
    it('Men-sortir Item ToDO - Terlama', () => {
        // Access URL
        cy.mainURL();
        // Click Activity to see the details
        cy.get('[data-cy="activity-item"]')
            .eq(0) // Activity Array Position
            .should('exist')
            .click();
        // Assert Tambah Button is Exist
        cy.get('[data-cy="todo-add-button"]')
            .should('exist');
        // Click Shorting Button
        cy.get('[data-cy="todo-sort-button"]')
            .click();
        // Select Sorting
        cy.get('[data-cy="sort-selection"]')
            .eq(1)
            .click();
    })

    it('Men-sortir Item ToDO - "Z-A"', () => {
        // Access URL
        cy.mainURL();
        // Click Activity to see the details
        cy.get('[data-cy="activity-item"]')
            .eq(0) // Activity Array Position
            .should('exist')
            .click();
        // Assert Tambah Button is Exist
        cy.get('[data-cy="todo-add-button"]')
            .should('exist');
        // Click Shorting Button
        cy.get('[data-cy="todo-sort-button"]')
            .click();
        // Select Sorting
        cy.get('[data-cy="sort-selection"]')
            .eq(3)
            .click();
    })

    it('Men-sortir Item ToDO - "A-Z"', () => {
        // Access URL
        cy.mainURL();
        // Click Activity to see the details
        cy.get('[data-cy="activity-item"]')
            .eq(0) // Activity Array Position
            .should('exist')
            .click();
        // Assert Tambah Button is Exist
        cy.get('[data-cy="todo-add-button"]')
            .should('exist');
        // Click Shorting Button
        cy.get('[data-cy="todo-sort-button"]')
            .click();
        // Select Sorting
        cy.get('[data-cy="sort-selection"]')
            .eq(2)
            .click();
    })
    
})