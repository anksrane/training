package practice;
import java.util.Scanner;

public class TakeInputs {

	public static void main(String[] args) {
		int sum=0;
	    Scanner sc = new Scanner(System.in);  
	    System.out.println("Enter the number: ");
	    int num=sc.nextInt();
	    for(int i=1;i<=num;i++) {
	    	sum=sum+i;
	    }
	    System.out.println("Sum is="+sum);
	}

}
