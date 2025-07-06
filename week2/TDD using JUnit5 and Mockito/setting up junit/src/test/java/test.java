import org.junit.Test;
import static org.junit.Assert.*;

public class test {
    @Test
    public void testAdd(){
        cal c = new cal();
        int result = c.add(5,10);
        assertEquals(15,result);
    }
}
