package functions;
import java.util.Scanner;

public class AddWithFunction {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter First Number: ");
		int num1 = sc.nextInt();
		System.out.println("Enter Second Number: ");
		int num2 = sc.nextInt();
		sc.close();

		AddWithFunction obj = new AddWithFunction();
		int Answer = obj.additon(num1, num2);
		System.out.println("Addition of " + num1 + " & " + num2 + " is : " + Answer);
	}

	private int additon(int num1, int num2) {
		int ans = num1 + num2;
		return ans;
	}

}
