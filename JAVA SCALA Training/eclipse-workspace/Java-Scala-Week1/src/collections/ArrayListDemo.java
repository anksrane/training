package collections;

import java.util.ArrayList;

public class ArrayListDemo {

	public static void main(String[] args) {
		ArrayList<String> cars = new ArrayList<String>();
		cars.add("Maruti");
		cars.add("Ford");
		cars.add("Tata");
		System.out.println(cars);
		System.out.println(cars.get(1));
		for(int i=0;i<cars.size();i++) {
			System.out.println(cars.get(i).toUpperCase());
		}
	}
}
