public class testClass {
    public static void main(String [] args){

        DocumentFactory exlfact = new ExcelDocumentFactory();
        Document exldoc = exlfact.createDocument();
        exldoc.open();
        System.out.println();

        DocumentFactory wrdfact = new WordDocumentFactory();
        Document wrddoc = wrdfact.createDocument();
        wrddoc.open();
        System.out.println();

        DocumentFactory pdffact = new PdfDocumentFactory();
        Document pdfdoc = pdffact.createDocument();
        pdfdoc.open();


    }
}
