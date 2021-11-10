describe('Menghapus Activity', () => {
    it('Membatalkan Hapus Activity dengan klik tombol Batal', () => {
        // Access URL
        cy.mainURL();
        // Hapus Activity
        cy.hapusActivity();
        // Click Batal Button
        cy.get('[data-cy="modal-delete-cancel-button"]')
            .click();
        // Check Activity still appear
        cy.get('[data-cy="activity-item"]', {force: true})
            .eq(0)
            .should('contain.text', 'New Activity');
        // Wait to pending time (Presentation Purpose)
        cy.wait(1000);
    })

    it('Sukses Hapus Activity', () => {
        // Access URL
        cy.mainURL();
        // Hapus Activity
        cy.hapusActivity();
        //Click Hapus Button
        cy.get('[data-cy="modal-delete-confirm-button"]')
            .click();
        // Wait to pending time (Presentation Purpose)
        cy.wait(1000);
    })

})