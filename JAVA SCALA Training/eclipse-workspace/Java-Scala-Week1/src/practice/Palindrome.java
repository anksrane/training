package practice;

import java.util.Scanner;

public class Palindrome {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the String: ");
		String original=sc.nextLine();
		String reverse="";
		int length=original.length();
		for(int i=length-1;i>=0;i--) {
			reverse=reverse+original.charAt(i);
		}
		System.out.println("Original String: "+original);
		System.out.println("Reverse String: "+reverse);
		if(original.equalsIgnoreCase(reverse)) {
			System.out.println("String is Palindrome");
		}else {
			System.out.println("String is not Palindrome");
		}
	}

}
