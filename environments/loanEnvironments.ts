import { Page } from "@playwright/test";

export class LoanEnvironments {
  page: Page;
  loanAmount: string;
  downPayment: string;

  constructor(page: Page) {
    this.page = page;
    this.loanAmount = "12000";
  }
}
