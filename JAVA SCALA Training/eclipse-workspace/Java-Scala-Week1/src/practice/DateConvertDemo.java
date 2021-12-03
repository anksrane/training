package practice;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateConvertDemo {

	public static void main(String[] args) {
		LocalDateTime obj=LocalDateTime.now();
		System.out.println(obj);
		
		DateTimeFormatter myFormat=DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
		DateTimeFormatter myFormat2=DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss");
		DateTimeFormatter myFormat3=DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
		DateTimeFormatter myFormat4=DateTimeFormatter.ofPattern("E, MMM dd, yyyy HH:mm:ss a");//a for am-pm
		System.out.println(obj.format(myFormat));
		System.out.println(obj.format(myFormat2));
		System.out.println(obj.format(myFormat3));
		System.out.println(obj.format(myFormat4));
	}

}

