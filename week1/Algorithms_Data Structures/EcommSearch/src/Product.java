public class Product {
    int productId;
    String productName;
    String category;
    Product(int id,String name,String category){
        this.productId =id;
        this.productName =name;
        this.category = category;
    }
    String getProduct(){
        return "["+this.productId+","+this.productName+","+this.category+"]";
    }
    @Override
    public String toString(){
        return "["+this.productId+","+this.productName+","+this.category+"]";
    }
}
