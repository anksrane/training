package loops;

import java.util.Scanner;

public class ArrayPrint {
	
	public void printArray(int n,int[] array) {
		int arrayLength=n;
		System.out.println("Element in Array are:");
		for(int i=0;i<arrayLength;i++) {
			System.out.println(array[i]);
		}
	}

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter number of element to be added into Array:");
		int arrayLength=sc.nextInt();
		
		int[] array=new int[arrayLength];
		System.out.println("Enter element into array");
		for(int i=0;i<arrayLength;i++) {
			array[i]=sc.nextInt();
		}
		ArrayPrint obj=new ArrayPrint();
		obj.printArray(arrayLength,array);
	}

}
