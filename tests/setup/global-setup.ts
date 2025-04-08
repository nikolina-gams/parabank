import { Browser, FullConfig, Page, chromium } from "@playwright/test";
import { RegistrationEnvironments } from "../../environments/registrationEnvironments";
import { RegistrationPage } from "../../POMs/registrationPage";
import dotenv from 'dotenv'; 
dotenv.config(); 


async function globalSetup(config: FullConfig) {
  const browser: Browser = await chromium.launch({ headless: true });
  const page: Page = await browser.newPage();

  const registationPage = new RegistrationPage(page);
  const registrationEnvironments = new RegistrationEnvironments(page);
    const baseURL = config.projects[0].use.baseURL;
    
    if (!baseURL){
        throw new Error("Base URL is not defined in the configuration.");
    }

    await page.goto(baseURL);
    await registationPage.registerNewUser(
    registrationEnvironments.firstName,
    registrationEnvironments.lastName,
    registrationEnvironments.address,
    registrationEnvironments.city,
    registrationEnvironments.state,
    registrationEnvironments.zipCode,
    registrationEnvironments.phone,
    registrationEnvironments.ssn,
    registrationEnvironments.username,
    registrationEnvironments.password,
  );
  await registationPage.assertRegistrationIsSuccessful();

  await page.context().storageState({ path: "storage/auth.json" });
  await browser.close();

}
export default globalSetup;
