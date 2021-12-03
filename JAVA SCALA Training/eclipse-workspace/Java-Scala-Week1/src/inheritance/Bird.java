package inheritance;

public class Bird implements Flying{
	double speed=0;
	double height=0;	
	public Bird(double speed, double height) {
		super();
		this.speed = speed;
		this.height = height;
	}
	@Override
	public void flyingSpeed() {
		System.out.println("Birds Flying Speed is: "+this.speed);
	}
	@Override
	public void flyingHeight() {
		System.out.println("Birds Flying Height is: "+this.height);
	}
	
}
