//ArraySum.java
import java.util.*;
public class ArraySum{

    public static void main(String[] args) {
        //instantiate an ArrayList called "array"
        ArrayList<Integer> array = new ArrayList<Integer>();
        int k = 0;
        
        for (int i = 0; i < 10; i++){
          array.add(1);
        }
        for (int j = 0; j < 10; j++){
          k += array.get(j);
        }
        //print the output
        System.out.println(k);
    }

}
