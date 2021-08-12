import { mount } from "@cypress/vue";
import Statistics from "./Statistics.vue";
import "../index.css";

describe("Meeting Statistics", () => {
  it("Total Button Exists", () => {
    mount(Statistics);
    cy.get("#totalButton").should("be.visible");
  });

  it("Total Data Shows by default", () => {
    mount(Statistics);
    cy.get("#totalClicked").should("be.visible");
  });

  it("Total Data Shows when clicked", () => {
    mount(Statistics);
    cy.get("#daysButton").click();
    cy.get("#totalButton").click();
    cy.get("#totalClicked").should("be.visible");
  });

  it("Last 30 Days Button Exists", () => {
    mount(Statistics);
    cy.get("#daysButton").should("be.visible");
  });

  it("Last 30 days Data Shows when clicked", () => {
    mount(Statistics);
    cy.get("#daysButton").click();
    cy.get("#monthlyClicked").should("be.visible");
  });
});
