//Parent.java
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

class Parent extends Person {
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
      Parent mom = new Parent();
      //Set name to "Mom" by invoking the superclass setName method
      mom.setName("Mom");
      //invoke the setHeight method of the superclass
      mom.setHeight(6);
      //invoke the setAge method of the subclass
      mom.setAge(35);
      //print all variables using the display function
      mom.display();
  }
}
