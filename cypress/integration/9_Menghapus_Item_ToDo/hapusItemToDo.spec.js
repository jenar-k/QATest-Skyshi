describe('Hapus Item ToDo', () => {
    it('Batal Hapus satu Item ToDo dengan klik tombol batal', () => {
        // Access URL
        cy.mainURL();
        // Click Activity to see the details
        cy.get('[data-cy="activity-item"]')
            .eq(0) // Activity Array Position
            .should('exist') // Assert New Activity
            .click();
        // Assert Tambah Button is Exist
        cy.get('[data-cy="todo-add-button"]')
            .should('exist');
        // Hapus Item ToDo
        cy.hapusItemToDo();
        // Click Batal Button
        cy.get('[data-cy="modal-delete-cancel-button"]')
            .click();
        // Wait to pending time (Presentation Purpose)
        cy.wait(1500);
    })

    it('Menghapus satu Item ToDo', () => {
        // Access URL
        cy.mainURL();
        // Click Activity to see the details
        cy.get('[data-cy="activity-item"]')
            .eq(0) // Activity Array Position
            .should('exist') // Assert New Activity
            .click();
        // Assert Tambah Button is Exist
        cy.get('[data-cy="todo-add-button"]')
            .should('exist');
        // Hapus Item ToDo
        cy.hapusItemToDo();
        // Click Hapus Button
        cy.get('[data-cy="modal-delete-confirm-button"]', {force:true})
            .click({force:true});
        // Wait to pending time (Presentation Purpose)
        cy.wait(1500);
    })
    
})