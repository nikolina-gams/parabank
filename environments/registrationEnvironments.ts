import { Page } from "@playwright/test";
import { config } from "dotenv";
config();


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
    this.firstName = process.env.FIRST_NAME || "";
    this.lastName = process.env.LAST_NAME || "";
    this.address = process.env.ADDRESS || "";
    this.city = process.env.CITY || "";
    this.state = process.env.STATE || "";
    this.zipCode = process.env.ZIP_CODE || "";
    this.phone = process.env.PHONE || "";
    this.ssn = process.env.SSN || "";
    this.username = `user_${Date.now()}`;
    this.password = process.env.PASSWORD || "";
  }
  
}
