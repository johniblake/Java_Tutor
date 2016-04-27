//Dog.java
public class Dog implements Pet{

   public void feed(){
      System.out.println("You have fed your dog.");
   }

   public void walk(){
      System.out.println("You are walking your dog.");
   }

   public int play(){
      System.out.println("You ware playing fetch with your dog.");
   }

   public static void main(String args[]){
      Dog d = new Dog();
      d.feed();
      d.play();
   }
}
