package functions;
import java.lang.Math;
public class Methods {

	public static void main(String[] args) {
		/*
		int returnedValue=Math.max(5, 10); //Inbuild function
		double returnedValue2=Math.max(12.157, 12.342);
		System.out.println(returnedValue);
		System.out.println(returnedValue2);
		*/
		Methods m1=new Methods();
		System.out.println(m1.isEvenNumber(67));
	}
    public boolean isEvenNumber(int num) {
        if (num % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }
    
    
	
}
