const {
    PDFDocument,
    StandardFonts,
    rgb
} = require("pdf-lib");
const {
    writeFileSync
} = require("fs");
const fetch = require("node-fetch")
const myFunction = async (input) => {
    const output = {};
    var requested_by = input.requested_by;
    var template = input.template;
    var requested_by = input.requested_by;
    var country = input.country;
    var entity = input.entity;
    var vertical = input.vertical;
    var department = input.department;
    var location = input.location;
    var invoice_type = input.invoice_type;
    var vendor_name = input.vendor_name;
    var purpose_of_payment = input.purpose_of_payment;
    var invoice_amount = input.invoice_amount;
    var invoice_currency = input.invoice_currency;
    var po_non_po = input.po_non_po;
    var po_no = input.po_no;
    var grn_no = input.grn_no;
    var subjected_to_tax = input.subjected_to_tax;
    var tax_code = input.tax_code;
    var subjected_to_wht = input.subjected_to_wht;
    var wht_tax_code = input.wht_tax_code;
    var approver_in_oracle = input.approver_in_oracle;
    var invoice_number = input.invoice_number;
    var date = input.date


    async function createPDF(input) {
        /*
        const PDFdoc = await PDFDocument.create();
        const page = PDFdoc.addPage([300, 400]);
        const text = "Hello World";
        const helveticaFont = await PDFdoc.embedFont(StandardFonts.Helvetica);
        const textWidth = helveticaFont.widthOfTextAtSize(text, 24);
        const textHeight = helveticaFont.heightAtSize(24);

        page.drawText(text, {
          x: page.getWidth() / 2 - textWidth / 2,
          y: page.getHeight() / 2 - textHeight / 2,
        });

        const pdfBytes = await PDFdoc.saveAsBase64();
        writeFileSync("hello.pdf", await PDFdoc.save());
        return (pdfBytes);
        */

        const pdfDoc = await PDFDocument.create()

        const page = pdfDoc.addPage([550, 750])
        const {
            width,
            height
        } = page.getSize()
        const fontSize = 10
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

        const pngUrl = 'https://www.grab.com/sg/wp-content/themes/grabsg/public/img/Grab_logo.png';
        const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer());
        const pngImage = await pdfDoc.embedPng(pngImageBytes);
        const rowgap = 15;

        const xstart = 30;
        const ystart = 650;
        const xcolonstart = 200;
        const xvalstart = 210;

        const form = pdfDoc.getForm()

        page.drawImage(pngImage, {
            x: 400,
            y: 690,
            width: 120,
            height: 50,
        })

        page.drawText('MANUAL PAYMENT REQUISITION FORM', {
            x: 30,
            y: 700,
            font: helveticaBoldFont,
            size: 15,
            color: rgb(0, 0.6, 0)
        })


        page.drawText('REQUESTED BY', {
            x: xstart,
            y: ystart,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart,
            size: fontSize
        })
        page.drawText('COUNTRY', {
            x: xstart,
            y: ystart - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap,
            size: fontSize
        })
        page.drawText('ENTITY', {
            x: xstart,
            y: ystart - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('VERTICAL', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('DEPARTMENT', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('LOCATION', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('INVOICE TYPE', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })


        page.drawText(requested_by, {
            x: xvalstart,
            y: ystart,
            size: fontSize
        })
        page.drawText(country, {
            x: xvalstart,
            y: ystart - rowgap,
            size: fontSize
        })
        page.drawText(entity, {
            x: xvalstart,
            y: ystart - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(vertical, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(department, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(location, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(invoice_type, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })

        page.drawLine({
            start: {
                x: xstart,
                y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap
            },
            end: {
                x: xstart + 500,
                y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap
            },
            thickness: 1,
            color: rgb(0, 0, 0),
            opacity: 1,
        })

        page.drawText('VENDOR NAME', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('PURPOSE OF PAYMENT', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('INVOICE AMOUNT', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('INVOICE CURRENCY', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('PO/ NON PO', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('PO NUMBER', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('GRN NUMBER', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('SUBJECTED TO TAX?', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('TAX CODE', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('SUBJECTED TO WHT?', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('WHT TAX CODE', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('APPROVER IN ORACLE', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })


        page.drawText(vendor_name, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(purpose_of_payment, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(invoice_amount, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(invoice_currency, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(po_non_po, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(po_no, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(grn_no, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(subjected_to_tax, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(tax_code, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(subjected_to_wht, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(wht_tax_code, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(approver_in_oracle, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })


        page.drawLine({
            start: {
                x: xstart,
                y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap
            },
            end: {
                x: xstart + 500,
                y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap
            },
            thickness: 1,
            color: rgb(0, 0, 0),
            opacity: 1,
        })

        page.drawText('INVOICE NUMBER', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText('DATE', {
            x: xstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            font: helveticaBoldFont,
            size: fontSize
        })
        page.drawText(':', {
            x: xcolonstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })

        page.drawText(invoice_number, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })
        page.drawText(date, {
            x: xvalstart,
            y: ystart - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap - rowgap,
            size: fontSize
        })

        const pdfBytes = await pdfDoc.saveAsBase64();
        writeFileSync("hello.pdf", await pdfDoc.save());
        return (pdfBytes);
    }

    output.response = await createPDF(input);
    return output;
}

exports.main = async (input) => {
    return await myFunction(input);

}

const myFunction1 = async () => {
    const input = {};
    input.requested_by = 'ferry.djaja@ferrydjaja.com'
    input.country = 'Singapore';
    input.entity = 'Management Services Pte Ltd';
    input.vertical = 'V91';
    input.department = 'Finance';
    input.location = 'SG';
    input.invoice_type = 'INVOICE';
    input.vendor_name = 'DELIVERYMAN';
    input.purpose_of_payment = 'Refund the credit in eWallet';
    input.invoice_amount = '400';
    input.invoice_currency = 'SGD';
    input.po_non_po = 'NON PO';
    input.po_no = 'N/A';
    input.grn_no = 'N/A';
    input.subjected_to_tax = 'No';
    input.tax_code = 'N/A';
    input.subjected_to_wht = 'No';
    input.wht_tax_code = 'N/A';
    input.approver_in_oracle = 'john@workato.com';
    input.invoice_number = 'PR_eWallet Refund_14/05/2021';
    input.date = '22 April, 2021';


    var res = await myFunction(input);
    console.log("Result:")
    console.log(res);
};
myFunction1();
