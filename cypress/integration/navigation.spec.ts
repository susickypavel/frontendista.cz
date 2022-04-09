/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
/* eslint-disable jest/expect-expect */

describe("Navigation", () => {
  it("opens navigation dropdown", () => {
    cy.visit("/");

    cy.get("nav").findByText("About").click();
    cy.findByText("My story").click();
    cy.url().should("contain", "/about");
  });
});
