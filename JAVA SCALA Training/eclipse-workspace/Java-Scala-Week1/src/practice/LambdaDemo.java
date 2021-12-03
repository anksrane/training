package practice;

import java.util.ArrayList;

public class LambdaDemo {
	public static void main(String[] args) {
		ArrayList<Integer> list=new ArrayList<Integer>();
		list.add(7);
		list.add(17);
		list.add(27);
		list.add(57);
		list.add(75);
		list.forEach((item)->{System.out.println(item);});
	}
}
