import { expect, Locator, Page } from "@playwright/test";

export class LoanPage {
  readonly page: Page;
  readonly requestLoanLink: Locator;
  readonly loanAmountField: Locator;
  readonly downPaymentField: Locator;
  readonly fromAccountField: Locator;
  readonly applyNowButton: Locator;
  readonly statusDenied: Locator;
  readonly statusApproved: Locator;

  constructor(page: Page) {
    this.page = page;
    this.requestLoanLink = page.getByRole("link", { name: "Request Loan" });
    this.loanAmountField = page.locator("#amount");
    this.downPaymentField = page.locator("#downPayment");
    this.fromAccountField = page.locator("#fromAccountId");
    this.applyNowButton = page.getByRole("button", { name: "Apply Now" });
    this.statusApproved = page.getByRole("cell", { name: "Approved" });
    this.statusDenied = page.getByRole("cell", { name: "Denied" });
  }

  async submitLoanWithEmptyMandatoryField(loanAmount: string) {
    await this.requestLoanLink.click();
    await this.loanAmountField.fill(loanAmount);
    await this.downPaymentField.click();
    await this.fromAccountField.click();
    await this.applyNowButton.click();
  }

  async assertLoanIsDenied() {
    await this.statusDenied.isVisible();
  }
}
