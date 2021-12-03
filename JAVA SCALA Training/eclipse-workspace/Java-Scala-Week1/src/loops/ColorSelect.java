package loops;
import java.util.Scanner;
public class ColorSelect {
	public static void main(String[] args) {
	    Scanner sc = new Scanner(System.in);  
	    System.out.println("Enter the number: ");
	    int num=sc.nextInt();
		if(num>0 && num<=10) {
			System.out.println("Blue");
		}else if(num>10 && num<=20) {
			System.out.println("Red");
		}else if(num>20 && num<=30) {
			System.out.println("Green");
		}else {
			System.out.println("Not correct color option");
		}
	}
}
