package classes;

public class Employee {
	String empID;
	String name;
	String mobileNo;
	String designation;
	public Employee() {
		this("E1","default","9876543210","Manager");
	}
	public Employee(String empID, String name) {
		this.empID = empID;
		this.name = name;
	}
	public Employee(String empID, String name, String mobileNo) {
		this.empID = empID;
		this.name = name;
		this.mobileNo = mobileNo;
	}
	public Employee(String empID, String name, String mobileNo, String designation) {
		this.empID = empID;
		this.name = name;
		this.mobileNo = mobileNo;
		this.designation = designation;
	}
	public String getEmpID() {
		return empID;
	}
	public void setEmpID(String empID) {
		this.empID = empID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
}
