public class Book {
    int bookId;
    String author;
    String title;
    Book(int id,String title, String author){
        this.bookId = id;
        this.title = title;
        this.author = author;
    }

    @Override
    public String toString(){
        return "["+bookId+"," + title+","+author+"]";
    }

}
