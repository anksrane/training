package inheritance;

public class TestInheritance {

	public static void main(String[] args) {
		Dog dog=new Dog("leo",8,52,5,7,4,52,"No");
		dog.eat();
		System.out.println("----------------------------");
		Animal ani=new Animal("Animal",1,1,5,5);
		ani.eat();
		System.out.println("----------------------------");
		Animal animal=new Dog("spark",8,52,5,7,4,52,"No");//Parent class object can construct child class
		animal.eat();
		/*
		System.out.println("----------------------------");
		Dog d=new Animal("Animal2",1,1,5,5); // 
		d.eat();
		*/
	}

}
