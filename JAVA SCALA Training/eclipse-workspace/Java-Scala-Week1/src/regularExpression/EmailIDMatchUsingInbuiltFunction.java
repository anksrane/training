package regularExpression;

import java.util.Scanner;
import org.apache.commons.validator.routines.*;

public class EmailIDMatchUsingInbuiltFunction {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the Email ID: ");
		String email=sc.nextLine();
		//Email Validation using Email Validator Class
		EmailValidator validator = EmailValidator.getInstance();
		boolean valid=validator.isValid(email);
		if(valid) {
			System.out.println("Email Id Valid");
		}else {
			System.out.println("Invalid Email ID");
		}
	}

}
