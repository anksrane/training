
public class Quiz1 {

	public static void main(String[] args) {
		double num1=20;
		double num2=80;
		double ans1=(num1+num2)*25;
		System.out.println("Step 3 Answer: "+ans1);
		int reminder=(int)ans1%40;
		System.out.println("Step 4 Answer: "+reminder);
		double finalAnswer=ans1+reminder;
		System.out.println("Final Answer: "+finalAnswer);
		if(finalAnswer>1000) {
			System.out.println("out of scope");
		}
		System.out.println((reminder==0)?"Reminder is zero "+finalAnswer:"Nothing "+finalAnswer);
	}
}
