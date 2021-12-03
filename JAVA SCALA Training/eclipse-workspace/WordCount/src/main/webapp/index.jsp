<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Welcome Page</title>
</head>
<body>
	<h1>Hello JSP and Servlet!</h1>
	<form action="wordCount" method="post">
		Enter the String to Check Word Occurance: 
		<input type="text" name="Sentence" size="5"> <input type="submit"
			value="Call Servlet" />
	</form>
	<h1>${Output}</h1>
</body>
</html>