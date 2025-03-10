import { test } from '@playwright/test';
import { LoanEnvironments } from '../../environments/loanEnvironments';
import { LoanPage } from '../../POMs/loanPage';


test('Denied loan', async({ page }) => {
    const loanPage = new LoanPage(page);
    const loanEnvironments = new LoanEnvironments(page);

    await page.goto('/');
    await loanPage.deniedLoan(loanEnvironments.loanAmount,loanEnvironments.downPayment);
    await loanPage.assertDeniedLoan();


})

