package collections;

import java.util.Scanner;

public class ReverseString {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter String to be Reverse");
		String oldString=sc.nextLine(),newString="";
		char ch;
		
		for(int i=0;i<oldString.length();i++) {
			ch=oldString.charAt(i);
			newString=ch+newString;
		}
		System.out.println("Old Word is: "+oldString);
		System.out.println("Reverse Word is: "+newString);
		
		System.out.println("-------------------------Buffer Way-----------------------------");
		StringBuffer sbr=new StringBuffer(oldString);
		sbr.reverse();
		System.out.println("By using String Buffer Reverse String :"+sbr);
	}

}
