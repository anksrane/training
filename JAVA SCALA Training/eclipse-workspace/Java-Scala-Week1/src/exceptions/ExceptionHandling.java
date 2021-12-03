package exceptions;

import java.io.BufferedReader;
import java.io.*;

public class ExceptionHandling {

	public static void main(String[] args) {
		try {
			int[] list= {3,5,7,10};
			System.out.println(list[2]);
			
		} catch (Exception e) {
			System.out.println("Something went wrong");
			e.printStackTrace();
		}
	}

}
