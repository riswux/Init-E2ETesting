describe('UI Input Testing', () => {

  it('calculates max length correctly', () => {
    cy.visit('HTML/UITest.html'); 

    // Enter a string
    cy.get('#string').type('ABBACDDC');

    // Enter an integer k
    cy.get('#k').type('2');

    // Click the submit button
    cy.get('input[type="button"]').click();

    // Verify the result
    cy.on('window:alert', (message) => {
      expect(message).to.equal('The length of the longest substring containing the same letter after performing at most 2 character replacements is 4.');
    });
  });


  it('calculates max length incorrectly', () => {
    cy.visit('HTML/UITest.html'); 

    // Enter a string
    cy.get('#string').type('123');

    // Enter an integer k
    cy.get('#k').type('2');

    // Click the submit button
    cy.get('input[type="button"]').click();

    // Verify the result
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Please enter valid inputs: s should consist of only uppercase English letters and have length between 1 and 105, and k should be a non-negative integer.');
    });
  });
});
