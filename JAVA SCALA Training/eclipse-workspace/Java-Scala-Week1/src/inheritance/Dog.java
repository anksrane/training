package inheritance;

public class Dog extends Animal{
	private int eyes;
	private int legs;
	private int tail;
	private int teeth;
	private String coat;
	
	public Dog(String name, int size, int weight, int eyes, int legs, int tail, int teeth,
			String coat) {
		super(name, 1, size, weight, 1);//Mandatory
		this.eyes = eyes;
		this.legs = legs;
		this.tail = tail;
		this.teeth = teeth;
		this.coat = coat;
	}
	private void chew() {
		System.out.println("Dog.chew() called");
	}
	@Override
	public void eat() {
		System.out.println("Animal.eat() called");
		chew();
		super.eat(); //not Mandatory can be execute without this
	}
}
