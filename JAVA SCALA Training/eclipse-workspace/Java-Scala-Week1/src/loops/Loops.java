package loops;
import java.util.Scanner;
public class Loops {

	public static void main(String[] args) {
		// While
		int count = 0;
		while (count < 10) {
			System.out.println(count);
			count++;
		}
		//For Loop
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
