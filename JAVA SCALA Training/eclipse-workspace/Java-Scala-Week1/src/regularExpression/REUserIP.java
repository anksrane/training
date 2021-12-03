package regularExpression;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class REUserIP {

	public static void main(String[] args) {
		Pattern pt=Pattern.compile("ankit",Pattern.CASE_INSENSITIVE);
		Matcher matcher=pt.matcher("Hello How are you. how is your honey");
		System.out.println(Pattern.matches("[a-zA-Z0-9]{6}","ankit68"));
		int count=0;
		boolean found=false;
		while(matcher.find()) {
			count++;
            System.out.println("found: " + count + " : "+ matcher.start() + " - " + matcher.end());
            found=true;
		}
        if(!found) {
        	System.out.println("Patter Not Found");
        }
	}

}
