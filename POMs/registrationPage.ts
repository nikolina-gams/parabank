import { expect, Locator, Page } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly registerLink: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly phone: Locator;
  readonly ssn: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;
  readonly successfulRegister: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerLink = page.getByRole("link", { name: "Register" });
    this.firstName = page.locator('[id="customer\\.firstName"]');
    this.lastName = page.locator('[id="customer\\.lastName"]');
    this.address = page.locator('[id="customer\\.address\\.street"]');
    this.city = page.locator('[id="customer\\.address\\.city"]');
    this.state = page.locator('[id="customer\\.address\\.state"]');
    this.zipCode = page.locator('[id="customer\\.address\\.zipCode"]');
    this.phone = page.locator('[id="customer\\.phoneNumber"]');
    this.ssn = page.locator('[id="customer\\.ssn"]');
    this.username = page.locator('[id="customer\\.username"]');
    this.password = page.locator('[id="customer\\.password"]');
    this.confirmPassword = page.locator("#repeatedPassword");
    this.registerButton = page.getByRole("button", { name: "Register" });
    this.successfulRegister = page.getByText("Your account was created");
  }

  async registerNewUser(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phone: string,
    ssn: string,
    username: string,
    password: string,
  ) {
    await this.registerLink.click();
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.address.fill(address);
    await this.city.fill(city);
    await this.state.fill(state);
    await this.zipCode.fill(zipCode);
    await this.phone.fill(phone);
    await this.ssn.fill(ssn);
    await this.username.fill(username);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
    await this.registerButton.click();
  }
  async assertRegistrationIsSuccessful() {
    await expect(this.successfulRegister).toBeVisible();
  }
}
