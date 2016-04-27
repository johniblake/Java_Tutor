//ArrayIterator.java
import java.util.*;
public class ArrayIterator {

    public static void main(String[] args) {
        //instantiate an ArrayList called "array"
        ArrayList<Integer> array = new ArrayList<Integer>();
        int k = 0;
        //populate array with 10 1's
        for (int i = 0; i < 10; i++){
          array.add(1);
        }
        //print out each item of array
        for (int j = 0; j < 10; j++){
          k = array.get(j);
          System.out.println(k);
        }
    }

}
