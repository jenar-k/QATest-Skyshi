describe('Menandai Selesai Item ToDo', () => {
    it('Mennandai Selesai Item ToDo', () => {
        // Access URL
        cy.mainURL();
        // Click Activity to see the details
        cy.get('[data-cy="activity-item"]')
            .eq(0) // Activity Array Position
            .should('exist') // Assert Activity
            .click();
        // Assert Tambah Button is Exist
        cy.get('[data-cy="todo-add-button"]', {force:true})
            .should('exist');
        // Select ToDo where has finished status
        cy.get('[data-cy="todo-item"]', {force:true})
            .find('[data-cy="todo-item-checkbox"]', {force:true})
            .eq(1)
            .check({force:true})
            .should('be.checked');
        // Click Shorting Button
        cy.get('[data-cy="todo-sort-button"]')
            .click();
        // Select Sorting
        cy.get('[data-cy="sort-selection"]')
            .eq(4)
            .click({force:true});
    })
    
})