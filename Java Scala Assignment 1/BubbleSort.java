package loops;

import java.util.Scanner;

public class BubbleSort {
	private void bubbleSOrt(int[] array,int arrayLength) {
        int n = arrayLength;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (array[j] > array[j+1])
                {
                    int temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
	}
	private void printArray(int[] array,int arrayLength) {
        int n = arrayLength;
        for (int i=0; i<n; ++i)
            System.out.print(array[i] + " ");
        System.out.println();
	}

	public static void main(String[] args) {
		/* int[] array = { 64, 34, 25, 12, 22, 11, 90 }; */
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter number of element to be added into Array:");
		int arrayLength=sc.nextInt();
		int[] array=new int[arrayLength];
		BubbleSort obj = new BubbleSort();
		if(arrayLength<=0) {
			System.out.println("Array Size Cannot be 0");
		}else {
			System.out.println("Enter element into array");
			for(int i=0;i<arrayLength;i++) {
				array[i]=sc.nextInt();
			}	
			System.out.println("Before Sorting array");
			obj.printArray(array,arrayLength);
			obj.bubbleSOrt(array,arrayLength);
			System.out.println("Sorted array");
			obj.printArray(array,arrayLength);
		}
	}
}
