import { Patient }                                  from '../service/domain/patient/patient.domain';

var jsPDF = require('jspdf');
require('jspdf-autotable');

export class ReportPatientDetail {

    dataPage: Patient;

    columns = ["ID", "Name", "Country"];
    rows = [
        [1, "Shaw", "Tanzania"],
        [2, "Nelson", "Kazakhstan"],
        [3, "Garcia", "Madagascar"]
    ];

    constructor() {}

    download(data: any) {
        this.dataPage = data;
        // Create new object
        var doc = new jsPDF();

        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, this.dataPage.name);
        // For new page
        doc.addPage();
        doc.autoTable(this.columns, this.rows);

        // Save the PDF
        doc.save('Test.pdf');
    }
}