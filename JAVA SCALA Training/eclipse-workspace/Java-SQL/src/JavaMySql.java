import java.sql.*;

public class JavaMySql {

	public static void main(String[] args) throws SQLException {
		try { 
			/*Create Connection*/
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/here1", "root", "password");
			String sqlInsert = "INSERT into persons(ID,FirstName,LastName,Age)Values(105,'Rohit','Sukale',25)";
			String sqlSelect="Select * from persons";
			
			/* For Inserting Data */
			PreparedStatement preparedStmt = con.prepareStatement(sqlInsert);
			preparedStmt.execute();
			
			/* For Fetching Data */
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(sqlSelect);
			while (rs.next()) {
				System.out.println(
						rs.getString(1) + " : " + rs.getString(2) + " : " + rs.getString(3) + " : " + rs.getString(4));
			}
			/*Close Connection*/
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
