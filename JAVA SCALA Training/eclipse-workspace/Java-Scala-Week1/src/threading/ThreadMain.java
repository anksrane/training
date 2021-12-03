package threading;

public class ThreadMain {

	public static void main(String[] args) throws InterruptedException {
		ThreadDemo thread1=new ThreadDemo();
		ThreadDemo2 thread2=new ThreadDemo2();
		ThreadDemo3 thread3obj=new ThreadDemo3();//Create Object of Interface
		Thread thread3=new Thread(thread3obj);//Create Object of Interface
		thread1.start();
		thread2.start();
		thread3.start();
		Thread.sleep(10000);
		System.out.println("Main Thread Ended");
	}
}
