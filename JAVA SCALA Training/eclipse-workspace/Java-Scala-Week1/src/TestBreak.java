
public class TestBreak {

	public static void main(String[] args) {
		for(int i=1; i<=10;i++) {
			if(i==6)
				break; //Comes out of loop
			System.out.println(i);
		}
		for(int i=1; i<=10;i++) {
			if(i==6)
				continue; //Skip that particular step and goes on to next execution
			System.out.println(i);
		}
	}

}
