import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String []args){
        Product[] products = {new Product(1,"Shirt","Menswear"),
                            new Product(2,"TShirt","Menswear"),
                            new Product(3,"SweatShirt","Gymwear"),
                            new Product(4,"Shorts","Gymwear")
                                            };
        System.out.println("Linear Search");
        Product Result1 = linearSearch(products,"Tshirt");
        if(Result1 != null){
            System.out.printf("product found %s and its id is %d, it belongs to %s category",Result1.productName,Result1.productId,Result1.category);
        }
        else {
            System.out.println("the requested product is not found");
        }
        System.out.println();

        System.out.println("Binary Search");
        Arrays.sort(products, Comparator.comparing(product -> product.productName.toLowerCase()));
        Product Result2 = binarySearch(products,"Shorts");
        if(Result2 != null){
            System.out.printf("product found %s and its id is %d, it belongs to %s category",Result2.productName,Result2.productId,Result2.category);
        }
        else {
            System.out.println("the requested product is not found");
        }


        }


        static Product linearSearch(Product[] products,String name){
        for(Product product : products){
            if(product.productName.equalsIgnoreCase(name)){
                return product;
            }
        }return null;
    }
    static Product binarySearch(Product[] products, String name){
        int l=0,r=products.length-1;
        while (l<=r){
            int mid = (l+r)/2;
            int comp;
            comp = products[mid].productName.compareToIgnoreCase(name);
            if(comp == 0) return products[mid];
            else if(comp < 0) l=mid+1;
            else r=mid-1;
        }
        return null;
    }


    }



