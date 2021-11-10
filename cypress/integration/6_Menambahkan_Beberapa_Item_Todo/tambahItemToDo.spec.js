describe('Menambahkan Beberapa Item ToDo', () => {
    it('Tidak dapat menambahkan data baru karena field belum lengkap', () => {
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
        // Assert Item List or Empty State is Exist
        cy.get('[data-cy="todo-empty-state"]')
            .should('exist');
        // Click Tambah Button
            cy.get('[data-cy="todo-add-button"]')
            .click();
        // Assert PopUp Add New Item Todo is Exist
        cy.get('[data-cy="modal-add"]')
            .should('exist');
        // Check Simpan Button in inactive/ disable mode 
        cy.get('[data-cy="modal-add-save-button"]')
            .should('be.disabled');
    })

    it('Sukses menambahkan beberapa data ToDo baru', () => {
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
        // Assert Item List or Empty State is Exist
        cy.get('[data-cy="todo-empty-state"]')
            .should('exist');
        cy.tambahToDOItem1();
        cy.tambahToDOItem2();
        cy.tambahToDOItem3();
        cy.tambahToDOItem4();
        cy.tambahToDOItem5();
         // Wait to pending time (Presentation Purpose)
        cy.wait(1000);
        // Click Back Button
        cy.get('[data-cy="todo-back-button"]', {force:true})
            .click({force:true});
    })
    
})