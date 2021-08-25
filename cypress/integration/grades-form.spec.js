describe("Form component", () => {
  it("should render page title", () => {
    cy.visit("/");
    cy.contains("Surf Scoring").should("to.have.length", 1);
  });

  it("Should add five grades between 0 and 10.", () => {
    cy.visit("/");

    cy.get("[data-cy=input1]").type("6.1");
    cy.get("[data-cy=input2]").type("7.6");
    cy.get("[data-cy=input3]").type("6.8");
    cy.get("[data-cy=input4]").type("5.0");
    cy.get("[data-cy=input5]").type("9.2");
    cy.get("[data-cy=btn-submit]").click();

    cy.contains(".good").should("to.have.length", 1);
  });
});
