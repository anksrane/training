package regularExpression;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailIDMatch {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the Email ID: ");
		String email=sc.nextLine();
		//Email Validation using Regular Expression
		Pattern pt=Pattern.compile("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",Pattern.CASE_INSENSITIVE);
		Matcher matcher=pt.matcher(email);
		if(matcher.find()){
			System.out.println("Email Format is correct");
		}else {
			System.out.println("Incorrect Format");
		}

	}

}
