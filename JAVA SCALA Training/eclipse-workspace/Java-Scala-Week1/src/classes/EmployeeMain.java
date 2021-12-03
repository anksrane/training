package classes;

public class EmployeeMain {

	public static void main(String[] args) {
		Employee e1=new Employee();
		Employee e2=new Employee("E2","abc");
		Employee e3=new Employee("E3","abc","9876543210","Manager");	
		System.out.println(e3.getDesignation());
	}

}
