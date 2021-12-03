package collections;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class WordCountHashMap {

	public static void main(String[] args) {
		
		 Scanner sc=new Scanner(System.in);
		 System.out.println("Enter String to be Reverse"); String
		 a=sc.nextLine();
		 
		/* String a="Hello how are you hello how we Hello"; */
		String[] words=a.toLowerCase().split(" ");
		Map<String,Integer> map=new HashMap<String,Integer>();
		
		for (String word : words) {
			Integer freq=map.get(word);
			if(freq==null) {
				map.put(word, 1);
			}else {
				map.put(word, ++freq);
			}
		}
		System.out.println(map);
	}

}
