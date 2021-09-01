describe("MEC Frontend Tests", () => {
  it("Load Home Page", function () {
    cy.visit("localhost:3000");
  });

  // it("Load About Page", function () {
  //   cy.visit("localhost:3000/about");
  // });

  // Inputs data into the data table then compares that data to the table output farther down
  // it("Inputing Data into table", function () {
  //   cy.visit("localhost:3000");
  //   cy.get("#employeeNumber").clear();
  //   cy.get("#employeeNumber").type("54263548");
  //   cy.get("#meetingTitle").clear();
  //   cy.get("#meetingTitle").type("Test Meeting Title");
  //   cy.get("#numSlides").clear();
  //   cy.get("#numSlides").type(9635687);
  //   cy.get("#meetingGroup").clear();
  //   cy.get("#meetingGroup").type("Group Test abc123");
  //   cy.get("#comment").clear();
  //   cy.get("#comment").type("Test Comment");
  //   cy.get("#start").click().wait(100);
  //   cy.get("#stop").click();
  //   cy.get("#submit").click();
  // });
  // it("Verify Data in dataTable", function () {
  //   cy.get("#dataTable").contains("Test Meeting Title");
  //   cy.get("#dataTable").contains("54263548");
  //   cy.get("#dataTable").contains("9635687");
  //   cy.get("#dataTable").contains("Group Test abc123");
  //   cy.get("#dataTable").contains("Test Comment");
  //   cy.get("#dataTable").contains("1.");
  // });

  it("Deletes Data From Table", function () {
    // cy.get("#deleteButton").click();
    // cy.get(".bg-rrpink-400").click();
    cy.get("#dataTable").should("not.contain", "Test Comment");
  });
  // it("Past Meeting Form", function () {
  //   cy.get("#employeeNumber").clear();
  //   cy.get("#pastMeeting").click();
  //   cy.get("#pastMeetingTitle").type("Past Meeting Title Test");
  //   cy.get("#pastMeetingDate").type("2021-01-22");
  //   cy.get("#pastMeetingComment").type("Past Meeting Test Comment");
  //   cy.get("#pastMeetingEmployeeNumber").type("0");
  //   cy.get("#pastMeetingMinutes").type("0");
  //   // cy.get("#headlessui-switch-2").click();
  //   cy.get("#pastMeetingNumSlides").type("25");
  //   cy.get("#pastMeetingSubmit").click();
  // });
});
