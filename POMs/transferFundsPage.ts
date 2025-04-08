import { expect, Locator, Page } from '@playwright/test';
import { TransferFundsEnvironments } from '../environments/transferFundsEnvironments';

export class TransferFundsPage {
    readonly page: Page;
    readonly transferFundsLink: Locator;
    readonly amountField: Locator;
    readonly fromAccountField: Locator;
    readonly toAccountField: Locator;
    readonly transferButton: Locator;
    readonly successfulTransfer: Locator;
    readonly unsuccessfulTransfer: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.transferFundsLink = page.locator('#leftPanel').getByRole('link', { name: 'Transfer Funds' })
        this.amountField = page.locator('#amount');
        this.fromAccountField = page.locator('#fromAccountId')
        this.toAccountField = page.locator('#toAccountId');
        this.transferButton = page.getByRole('button', { name: 'Transfer' })
        this.successfulTransfer = page.getByRole('heading', { name: 'Transfer Complete!' })
        this.unsuccessfulTransfer = page.getByRole('heading', { name: 'Error!' })
    }

    async submitValidTransferForm(amountToTransfer: string){
        await this.transferFundsLink.click();
        await this.amountField.fill(amountToTransfer);
        await this.fromAccountField.click();
        await this.toAccountField.click();
        await this.transferButton.click();
        
    }
    async assertTransferIsSuccessful(){
        await this.successfulTransfer.isVisible();
    }
    async submitTransferFormWithEmptyMandatoryFields(){
        await this.transferFundsLink.click();
        await this.amountField.click();
        await this.fromAccountField.click();
        await this.toAccountField.click();
        await this.transferButton.click();
    }
    async assertTransferIsNotSuccessful(){
        await this.unsuccessfulTransfer.isVisible();
    }
    }
