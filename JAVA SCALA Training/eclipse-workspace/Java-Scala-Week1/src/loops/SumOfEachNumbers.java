package loops;
import java.util.Scanner;

public class SumOfEachNumbers {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Number: ");
		int num = sc.nextInt();
		sc.close();
		
		SumOfEachNumbers obj = new SumOfEachNumbers();
		int sumReturned = obj.additionOfNumbers(num);
		System.out.println("Sum of " + num + " is " + sumReturned);
	}

	private int additionOfNumbers(int num) {
		int sum = 0;
		while (num > 0) {
			int reminder = num % 10;
			num = num / 10;
			sum = sum + reminder;
		}
		return sum;
	}

}
