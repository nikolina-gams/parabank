import { test } from "@playwright/test";
import { TransferFundsPage } from "../../POMs/transferFundsPage";
import { TransferFundsEnvironments } from "../../environments/transferFundsEnvironments";

test.describe("Tests for transfering funds", () => {
let transferFundsPage;
let transferFundsEnvironments; 

test.beforeEach(async ({ page }) => {
   // Given (user is on loan request page)
  transferFundsPage = new TransferFundsPage(page);
  transferFundsEnvironments = new TransferFundsEnvironments(page);
  await page.goto("/");
});


test("Successfully transfer funds", async ({ page }) => {
  // When (user fills and submits the transfer funds form with valid data)
  await transferFundsPage.submitValidTransferForm(transferFundsEnvironments.amountToTransfer);
  // Then (transfer of funds is sucessful)
  await transferFundsPage.assertTransferIsSuccessful();
});

test("Unsuccessfully transfer funds - mandatory field is empty", async ({ page }) => {
  // When (user fills and submits the transfer funds form with mandatory field empty)
await transferFundsPage.submitTransferFormWithEmptyMandatoryFields();
// Then (transfer fails and error message is shown)
await transferFundsPage.assertTransferIsNotSuccessful();

});
});
