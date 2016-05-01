//Person.java
class Person {

    private int height;

    public Person(int h) {
      height = h;
    }

    public void printHeight() {
      System.out.println("Height: "+ height);
    }

    public static void main(String[] args) {
        Person guy = new Person(5);
        guy.printHeight();
    }
}
