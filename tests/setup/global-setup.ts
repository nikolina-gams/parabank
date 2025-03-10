import { Browser, FullConfig, Page, chromium } from '@playwright/test';
import { RegistrationEnvironments } from '../../environments/registrationEnvironments';
import { RegistrationPage } from '../../POMs/registrationPage';


async function globalSetup(config: FullConfig) {
    console.log('Pokreće se globalSetup...');
    
    const browser: Browser = await chromium.launch({ headless: true});
    const page: Page = await browser.newPage();

    const registationPage = new RegistrationPage(page);
    const registrationEnvironments = new RegistrationEnvironments(page);
    const baseURL = config.projects[0].use?.baseURL || 'https://parabank.parasoft.com/parabank/index.htm';

    await page.goto(baseURL);
    await registationPage.registerNewUser(registrationEnvironments.firstName, registrationEnvironments.lastName, registrationEnvironments.address, registrationEnvironments.city, registrationEnvironments.state, registrationEnvironments.zipCode, registrationEnvironments.phone, registrationEnvironments.ssn, registrationEnvironments.username, registrationEnvironments.password);
    await registationPage.assertRegistrationIsSuccessful();
    console.log('Registracija uspješna!'); 
 
    await page.context().storageState({ path: 'storage/auth.json' });
    await browser.close();
   
}
export default globalSetup;

