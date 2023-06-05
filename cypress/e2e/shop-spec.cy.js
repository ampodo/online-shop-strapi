describe("Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should open the shopping cart when the cart icon is clicked", () => {
    // Click the cart icon
    cy.get(".cart-icon").click();

    // Assert that the cart is opened
    cy.get(".cart-icon").should("be.visible");
  });

  it("should close the shopping cart when the close button is clicked", () => {
    // Click the cart icon
    cy.get(".cart-icon").click();

    // Click the close button
    cy.get(".close-btn").click();
  });


  
});
