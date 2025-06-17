public class MaintestLogger {
    public static void main(String [] aargs){
        Logger log = Logger.getInstance();
        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();
        System.out.println();

        log.printDefault();
        log.printMessage("I am the instance number one");

        System.out.println();

        log1.printDefault();
        log1.printMessage("I am the instance number two ");

        System.out.println();

        log2.printDefault();
        log2.printMessage("Hello this is the third instance");

        System.out.println();
        if (log == log1){
            System.out.println("Only one instance exists in the progam "  + (log1==log2));
        }
        else {
            System.out.println("More than one instance is created \n");
        }
    }
}
