import { Browser, FullConfig, Page, chromium } from "@playwright/test";
import { RegistrationEnvironments } from "../../environments/registrationEnvironments";
import { RegistrationPage } from "../../POMs/registrationPage";

async function globalSetup(config: FullConfig) {
  const browser: Browser = await chromium.launch({ headless: true });
  const page: Page = await browser.newPage();

  const registationPage = new RegistrationPage(page);
  const registrationEnvironments = new RegistrationEnvironments(page);

  await page.goto("https://parabank.parasoft.com/parabank/index.htm");
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
