package exceptions;


import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFileException {
	public static void main(String[] args) {
		try {
			File file = new File("b.txt");
			System.out.println(file.getAbsolutePath());
			Scanner sc = new Scanner(file);
			while (sc.hasNextLine()) {
				System.out.println(sc.nextLine());
			}
			sc.close();
		} catch (FileNotFoundException e) {
			System.out.println("Error Found: " + e);
		}
	}
}
