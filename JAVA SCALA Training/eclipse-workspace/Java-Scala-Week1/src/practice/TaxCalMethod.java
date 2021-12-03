package practice;
import java.util.Scanner;

public class TaxCalMethod {

	public double TaxCalculation(double sal) {
		double incomeTax = 0;
		if (sal >= 0 && sal <= 500000) {
			incomeTax = sal * 0.0;
		} else if (sal >= 500000 && sal <= 1000000) {
			incomeTax = sal * 0.1;
		} else if (sal >= 1000000 && sal <= 2000000) {
			incomeTax = sal * 0.2;
		}
		return incomeTax;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Yearly Salary in Rupees: ");
		double salary = sc.nextDouble();

		TaxCalMethod obj = new TaxCalMethod();
		double incomeTax = obj.TaxCalculation(salary);
		System.out.println("IncomeTax on " + salary + " is: " + incomeTax);
	}

}