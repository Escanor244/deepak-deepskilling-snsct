import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String [] args){
        Book[] books ={new Book(1,"The seven wonders","Robert Winlarge"),
                        new Book(2,"The nine tailed humans","William Nicole")};

        System.out.println("The Linear Search Implementation");
        Book result = linearSearchbytitle(books,"The seven wonders");
        System.out.println("Searching through the title");
        if(result != null){
            System.out.printf("Book ID: %d, Name: %s, Author: %s has been found",result.bookId,result.title,result.author);
            System.out.println();
        }else {
            System.out.println("The requested book is not found in the library");
        }
        Book resultt = linearSearchbyauthor(books,"Robert winlarge");
        System.out.println("Searching through the author");
        if(resultt != null){
            System.out.printf("Book ID: %d, Name: %s, Author: %s has been found",resultt.bookId,resultt.title,resultt.author);
            System.out.println();
        }else {
            System.out.println("The requested book is not found in the library");
        }



        System.out.println("The Binary Search Implementation");
        System.out.println("Searching through the author");
        Arrays.sort(books, Comparator.comparing(book -> book.author.toLowerCase()));
        Book result1 = binarySearchbyauthor(books,"william nicole");
        if(result1 != null){
            System.out.printf("Book ID: %d, Name: %s, Author: %s has been found",result1.bookId,result1.title,result1.author);
            System.out.println();
        }else {
            System.out.println("The requested book is not found in the library");
        }
        System.out.println("Searching through the title");
        Arrays.sort(books, Comparator.comparing(book -> book.title.toLowerCase()));
        Book result2 = binarySearchbytitle(books,"the nine tailed humans");
        if(result2 != null){
            System.out.printf("Book ID: %d, Name: %s, Author: %s has been found",result2.bookId,result2.title,result2.author);
            System.out.println();
        }else {
            System.out.println("The requested book is not found in the library");
        }

    }
    static Book linearSearchbytitle(Book[] books, String name){
        for(Book book : books){
            if(book.title.equalsIgnoreCase(name)){
                return book;
            }
        }
        return null;
    }
    static Book linearSearchbyauthor(Book[] books, String name){
        for(Book book : books){
            if(book.author.equalsIgnoreCase(name)){
                return book;
            }
        }
        return null;
    }
    static Book binarySearchbyauthor(Book[] books, String name){
        int l=0,r=books.length;
        while (l<=r){
            int mid = (l+r)/2;
            int comp = books[mid].author.compareToIgnoreCase(name);
            if(comp == 0) return books[mid];
            else if (comp < l) l = mid+1;
            else r=mid-1;
        }
        return null;
    }
    static Book binarySearchbytitle(Book[] books, String name){
        int l=0,r=books.length;
        while (l<=r){
            int mid = (l+r)/2;
            int comp = books[mid].title.compareToIgnoreCase(name);
            if(comp == 0) return books[mid];
            else if (comp < l) l = mid+1;
            else r=mid-1;
        }
        return null;
    }
}
