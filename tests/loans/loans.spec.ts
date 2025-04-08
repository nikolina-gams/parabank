import { test } from "@playwright/test";
import { LoanEnvironments } from "../../environments/loanEnvironments";
import { LoanPage } from "../../POMs/loanPage";

test.describe("Tests for requesting loans", () => {
  let loanPage;
  let loanEnvironments;

  test.beforeEach(async ({ page }) => {
    // Given (user is on loan request page)
    loanPage = new LoanPage(page);
    loanEnvironments = new LoanEnvironments(page);
    await page.goto("/");
  });


test("Loan is denied if Down Payment field is left empty", async ({ page }) => {
  // When (user submits loan form with missing mandatory data)
  await loanPage.submitLoanWithEmptyDownPaymnentField(loanEnvironments.loanAmount);
  // Then (loan request should be denied)
  await loanPage.assertLoanIsDenied();
});
})
