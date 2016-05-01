//Parent.java
class Person{
  //super class variable name
  String name;

  //superclass constructor
  Person (String name){
    this.age = age;
  }
   //superclass method getName
  public void getName(){
    System.out.println("Name: " + name);
  }
}

public class Parent extends Person {
  //subclass constructor
  Parent(String n){
    //sets the superclass name variable to n
    super(n);
  }

  public static void main(String argd[]){
    Parent p = new Parent("Mom");
    p.getName();
  }
}
