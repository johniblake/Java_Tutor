//Person.java
class Person {
    String name;
    int height;

    public Person(String n) {
      // This constructor has one parameter, name.
      name = n;
      System.out.println("Person's name is: " + name);
    }
    public void setHeight(int h){
      height = h;
    }
    public int getHeight(){
      return height;
    }

    public static void main(String[] args) {
      /* Object creation */
        Person guy = new Person("Gob");
        /* Call class method to set person's height */
        guy.setHeight(5);
        /* Call another class method to get person's height */
        int guyHeight = guy.getHeight();
        /* You can access instance variable as follows as well */
        System.out.println("Person's height is: " + guy.height) + ".";
    }
}
