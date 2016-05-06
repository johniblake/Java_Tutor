//Student.java
class Person {
    String name;
    int height;

    public void setHeight(int h){
      height = h;
    }
    public void setName(String name){
      name = n;
    }
}

class Student extends Person {
  //new subclass variable age;
  int age;
  //new subclass method setAge;
  public void setAge(int a){
    age = a;
  }
  //prints all variables
  public void display(){
    System.out.println("Name: " + name);
    System.out.println("Height: " + height);
    System.out.println("Age: " + age);
  }

  public static void main(String[] args) {
      //Instantiate subclass
      Student alex = new Student();
      //Set name to "Mom" by invoking the superclass setName method
      alex.setName("Alex");
      //invoke the setHeight method of the superclass
      alex.setHeight(6);
      //invoke the setAge method of the subclass
      alex.setAge(20);
      //print all variables using the display function
      alex.display();
  }
}
