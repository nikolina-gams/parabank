import { Page } from "@playwright/test";

export class RegistrationEnvironments {
  page: Page;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  ssn: string;
  username: string;
  password: string;

  constructor(page: Page) {
    this.page = page;
    this.firstName = "Test";
    this.lastName = "User";
    this.address = "Street 285";
    this.city = "Osijek";
    this.state = "Croatia";
    this.zipCode = "31000";
    this.phone = "0998554226";
    this.ssn = "123456";
    this.username = `user_${Date.now()}`;
    this.password = "password123";
  }
}
