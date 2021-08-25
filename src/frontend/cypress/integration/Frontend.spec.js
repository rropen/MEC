describe("MEC Frontend Tests", () => {
  it("Load Home Page", function () {
    cy.visit("localhost:3000");
  });

  it("Load About Page", function () {
    cy.visit("localhost:3000/about");
  });

  // Inputs data into the data table then compares that data to the table output farther down
  it("Inputing Data into table", function () {
    cy.visit("localhost:3000");
    cy.get("#employeeNumber").clear();
    cy.get("#employeeNumber").type("2000");
    cy.get("#meetingTitle").clear();
    cy.get("#meetingTitle").type("Test Meeting Title");
    cy.get("#numSlides").clear();
    cy.get("#numSlides").type(25);
    cy.get("#meetingGroup").clear();
    cy.get("#meetingGroup").type("Group 1");
    cy.get("#comment").clear();
    cy.get("#comment").type("Test Comment");
    cy.get("#start").click().wait(100);
    cy.get("#stop").click();
  });

  it("Past Meeting Form", function () {
    cy.get("#employeeNumber").clear();
    cy.get("#pastMeeting").click();
    cy.get("#pastMeetingTitle").type("Past Meeting Title Test");
    cy.get("#pastMeetingDate").type("2021-01-22");
    cy.get("#pastMeetingComment").type("Past Meeting Test Comment");
    cy.get("#pastMeetingEmployeeNumber").type("0");
    cy.get("#pastMeetingMinutes").type("0");
    // cy.get("#headlessui-switch-2").click();
    cy.get("#pastMeetingNumSlides").type("25");
    cy.get("#pastMeetingSubmit").click();
  });
});
