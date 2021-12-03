package regularExpression;

import java.util.Scanner;
import java.util.regex.Pattern;

public class MobileNoMatching {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the 10 digit mobile number");
		String number=sc.nextLine();
		if(Pattern.matches("[0-9]{10}",number)){
			System.out.println("Format is correct");
		}else {
			System.out.println("Incorrect Format");
		}
	}

}
