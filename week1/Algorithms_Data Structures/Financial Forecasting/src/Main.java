import java.util.HashMap;

public class Main {
    public static void main(String [] args){
        int initialValue = 1500000;
        double rate = 11.5;
        rate /=100;
        int year = 5;
        double result = futureValue(initialValue,rate,year);
        System.out.println(result);
    }
    static double futureValue(int initialValue, double rate, int year){
        if(year==0){
            return initialValue;
        }
        return futureValue(initialValue,rate,year-1)*(rate+1);
    }
}
