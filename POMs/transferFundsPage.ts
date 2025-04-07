import { expect, Locator, Page } from '@playwright/test';
import { TransferFundsEnvironments } from '../environments/transferFundsEnvironments';

export class TransferFundsPage {
    readonly page: Page;
    readonly transferFundsLink: Locator;
    readonly amountField: Locator;
    readonly fromAccountField: Locator;
    readonly toAccountField: Locator;
    readonly trasnferButton: Locator;
    readonly successTransfer: Locator;
    readonly unsuccessTransfer: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.transferFundsLink = page.locator('#leftPanel').getByRole('link', { name: 'Transfer Funds' })
        this.amountField = page.locator('#amount');
        this.fromAccountField = page.locator('#fromAccountId')
        this.toAccountField = page.locator('#toAccountId');
        this.trasnferButton = page.getByRole('button', { name: 'Transfer' })
        this.successTransfer = page.getByRole('heading', { name: 'Transfer Complete!' })
        this.unsuccessTransfer = page.getByRole('heading', { name: 'Error!' })
    }

    async transferIsSuccessful(amountToTransfer: string){
        await this.transferFundsLink.click();
        await this.amountField.fill(amountToTransfer);
        await this.fromAccountField.click();
        await this.toAccountField.click();
        await this.trasnferButton.click();
        
    }
    async assertTransferIsSuccessful(){
        await this.successTransfer.isVisible();
    }
    async trasferIsNotSuccessful(){
        await this.transferFundsLink.click();
        await this.amountField.click();
        await this.fromAccountField.click();
        await this.toAccountField.click();
        await this.trasnferButton.click();
    }
    async assertTransferIsNotSuccessful(){
        await this.unsuccessTransfer.isVisible();
    }
    }
