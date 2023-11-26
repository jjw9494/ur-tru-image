//Remember to run dev before running tests - npm run open:cypress

describe("end to end tests", () => {
  it("Site renders", () => {
    cy.visit("http://localhost:3000/");
  });

  it("navigates from / to /about to /artists (desktop)", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h1").should(
      "contain",
      "London Record Label & Occasional Function."
    );

    cy.contains("About").click();
    cy.url().should("include", "/about");

    cy.contains("Artists").click();
    cy.url().should("include", "/artists");
  });

  it("opens search, confirm feed updates with search params", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h1").should(
      "contain",
      "London Record Label & Occasional Function."
    );

    cy.contains("Search").click();
    cy.get("#search-input").type("test {enter}");
    cy.url().should("include", "/?q=test");
  });

  it("feed updates when a filter is toggled", () => {
    cy.visit("http://localhost:3000/");

    let initial = 0;
    cy.get(".card")
      .its("length")
      .then((count) => (initial = count));
    cy.contains(/video/i)
      .click()
      .then(() => {
        cy.get(".card").its("length").should("not.eq", initial);
      });
  });

  it("clicking menu, then artists, then menu, then about (mobile)", () => {
    cy.viewport("iphone-6");
    cy.visit("http://localhost:3000/");

    cy.get("h1").should(
      "contain",
      "London Record Label & Occasional Function."
    );

    cy.get("#menu-button").click();
    cy.contains("Artists").click();
    cy.url().should("include", "/artists");

    cy.get("#menu-button").click();
    cy.contains("About").click();
    cy.url().should("include", "/about");
  });

  it("opens search, confirm feed updates with search params (mobile)", () => {
    cy.viewport("iphone-6");
    cy.visit("http://localhost:3000/");

    cy.get("h1").should(
      "contain",
      "London Record Label & Occasional Function."
    );

    cy.get("#menu-button").click();
    cy.contains("Search").click();
    cy.get("#search-input").type("test {enter}");
    cy.url().should("include", "/?q=test");
  });

  it("feed updates when a filter is toggled (mobile)", () => {
    cy.viewport("iphone-6");
    cy.visit("http://localhost:3000/");

    let initial = 0;
    cy.get(".card")
      .its("length")
      .then((count) => (initial = count));
    cy.get("#filter-button").click();
    cy.contains(/video/i)
      .click()
      .then(() => {
        cy.get(".card").its("length").should("not.eq", initial);
      });
  });
});
