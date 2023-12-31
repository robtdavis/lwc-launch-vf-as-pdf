import { LightningElement, api } from 'lwc';

import downloadPDF from '@salesforce/apex/PrintJobPDFController.getPDFPrint'; 

export default class PrintJobsContainer extends LightningElement {
    boolShowSpinner = false;
    strFile;
    pdfString;
    @api cardTitle;
    @api buttonDescription;
    @api buttonLabel;
    @api visualForcePage;

    generatePDF(){
        this.boolShowSpinner = true;
        downloadPDF({vfPage: this.visualForcePage}).then(response => {
            window.open(response[1], '_blank');
        }).catch(error=>{
            console.log('Error '+error.body.message);
        });
        this.boolShowSpinner = false;
    }

}