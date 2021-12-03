package classes;

public class Account {
	private String number;
	private double balance;
	private String customerName;
	private String customerEmailAddress;
	private String customerPhoneNumber;
	
	public Account() {
		this("56789", 2.5, "NA", "NA", "NA");
	}
	
	public Account(String number, double balance, String customerName, String customerEmailAddress,
			String customerPhoneNumber) {
		this.number=number;
		this.balance=balance;
		this.customerName=customerName;
		this.customerEmailAddress=customerEmailAddress;
		this.customerPhoneNumber=customerPhoneNumber;
	}

	public void withdrawal(double withdrawalAmount) {
		if(this.balance-withdrawalAmount<=0) {
			System.out.println("Only "+this.balance+" available.");
		}else {
			this.balance-=withdrawalAmount; //this.balance=this.balance-withdrawalAmount
			System.out.println("Withdrawal of "+withdrawalAmount+" processed, Remaing balance= "+this.balance);
		}
	}
	public void deposit(double depositAmount) {
		this.balance+=depositAmount; //		this.balance+=this.balance+depositAmount;
		System.out.println("Deposit of "+depositAmount+" made. New Balance is "+this.balance);
	}
	
	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmailAddress() {
		return customerEmailAddress;
	}

	public void setCustomerEmailAddress(String customerEmailAddress) {
		this.customerEmailAddress = customerEmailAddress;
	}

	public String getCustomerPhoneNumber() {
		return customerPhoneNumber;
	}

	public void setCustomerPhoneNumber(String customerPhoneNumber) {
		this.customerPhoneNumber = customerPhoneNumber;
	}
	
	
}
