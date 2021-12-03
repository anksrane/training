package loops;
import java.util.Scanner;

public class Starpattern {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number of rows to print: ");
		int num = sc.nextInt();

		for (int i = 1; i <=num; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.print(i+","+j+" ");
			}
			System.out.println();
		}
		
		System.out.println("------------------------------------");
		for (int i = num - 1; i >= 0; i--) {
			for (int j = 0; j <= i; j++) {
				System.out.print("*" + " ");
			}
			System.out.println();
		}
	}

}
