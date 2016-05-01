//HelloWorld2.java
public class HelloWorld2 {

    public static void main(String[] args) {
        //create an empty string variable called "name"
        String name = "";
        //reassign "name" to be the first argument provided from the command line
        name = args[0];
        // Prints the output.
        System.out.println("Hello, World! My name is " + name + ".");
    }
}
