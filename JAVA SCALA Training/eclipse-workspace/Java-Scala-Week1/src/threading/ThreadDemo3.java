package threading;

public class ThreadDemo3 implements Runnable{
	public void run() {
		for(int i=0;i<10;i++) {
			System.out.println("Thread 3="+i);
		}
		System.out.println("Thread 3 Ended");
	}
}
