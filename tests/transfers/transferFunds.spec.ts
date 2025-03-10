import { test } from '@playwright/test';
import { TransferFundsPage } from '../../POMs/transferFundsPage';
import { TransferFundsEnvironments } from '../../environments/transferFundsEnvironments';

test('Successfully transfer funds', async({ page }) => {
    const transferFundsPage = new TransferFundsPage(page);
    const transferFundsEnvironments = new TransferFundsEnvironments(page);

    await page.goto('/');
    await transferFundsPage.transferIsSuccessful(transferFundsEnvironments.amountToTransfer);
    await transferFundsPage.assertSuccessTransfer();

})