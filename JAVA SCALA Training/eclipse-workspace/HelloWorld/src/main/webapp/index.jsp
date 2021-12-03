<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hello World Java Project</title>
</head>
<body>
<%-- 	<h1>Hello JSP and Servlet!</h1>
	<form action="helloServlet" method="post">
		    Enter the number: <input type="text" name="number" size="5">
		    <input type="submit" value="Call Servlet" />
	</form>
	<br>
<h1>${InputNum}</h1> --%>

	<br>
	<form action="helloServlet" method="post">
		<input type="text" name="size" id="sizeOf" value=""> 
		<input type="submit" name="Add" id="Add" value="Size Of Array"> <br>
	</form>
	<br>
	<form action="helloServlet" method="post">
		<input type="text" name="arrayList" id="arrayList" value=""	placeholder="Array List">
		<input type="submit" name="Add" id="Add" value="Sort Array">
	</form>
</body>
</html>