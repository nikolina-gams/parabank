import { Page } from "@playwright/test";

export class TransferFundsEnvironments {
    page: Page;
    amountToTransfer: string;
    

     constructor(page: Page) {
        this.page = page;
        this.amountToTransfer = '258';
       
        
      
        
    }
}