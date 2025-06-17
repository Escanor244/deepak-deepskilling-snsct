public class Logger {
    private static Logger instance = new Logger();
    private Logger(){
        System.out.println("The logger class has successfully initialized");
    }
//    public static Logger getInstance(){
//        if(instance == null){
//            instance = new Logger();
//        }
//        return instance;
//    }
    public static Logger getInstance(){
        return instance;
    }

    void printMessage(String message){
        System.out.println(message + " \nthis is the message from the instance created in this program");
    }
    void printDefault(){
        System.out.println("This is the default message");
    }
}
