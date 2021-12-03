package regularExpression;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

//Pattern matching
public class RegularExpression {

	public static void main(String[] args) {
		Pattern pt = Pattern.compile("how", Pattern.CASE_INSENSITIVE);
		Matcher matcher = pt.matcher("Hello How are you. how is your honey");
		if (matcher.find()) {
			System.out.println("Match Found");
		} else {
			System.out.println("Not Matching");
		}

	}

}
