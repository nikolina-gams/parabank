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
    this.firstName = process.env.PARABANK_FIRST_NAME || "Test";
    this.lastName = process.env.PARABANK_LAST_NAME || "User";
    this.address = process.env.PARABANK_ADDRESS || "";
    this.city = process.env.PARABANK_CITY || "";
    this.state = process.env.PARABANK_STATE || "";
    this.zipCode = process.env.PARABANK_ZIP_CODE || "";
    this.phone = process.env.PARABANK_PHONE || "";
    this.ssn = process.env.PARABANK_SSN || "";
    this.username = `user_${Date.now()}`;
    this.password = process.env.PARABANK_PASSWORD || "";
  }
  
}
