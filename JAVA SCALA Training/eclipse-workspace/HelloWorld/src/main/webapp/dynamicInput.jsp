<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hello World Java Project</title>
</head>
<body>
	<h1>Hello JSP and Servlet!</h1>
	<form action="helloServlet" method="post">
		    Enter the number: <input type="text" name="number" size="5">
		    <input type="submit" value="Call Servlet" />
	</form>
	<br>

	<h1>${InputNum}</h1>
	<br>
	<input type="text" name="size" id="sizeOf" value="">
	<a href="#" id="inputSet" onclick="addInput()">Add Inputs</a>
	<br>
	<br>
	<input type="text" name="arrayList" id="arrayList" value=""	placeholder="Array List">
	<br>
	<br>
	<input type="button" name="Add" id="Add" onclick="addValue()" value="Click me">
	<div id="container"></div>
	<h1>${lastname}</h1>
	<script>
		function addInput() {
			var sizeOf = document.getElementById("sizeOf").value;
			document.getElementById('container');
			while (container.hasChildNodes()) {
				container.removeChild(container.lastChild);
			}
			for (i = 0; i < sizeOf; i++) {
				container.appendChild(document.createTextNode("Array Input "
						+ (i + 1) + " "));
				var input = document.createElement("input");
				input.type = "text";
				input.name = "ArrayInput" + i;
				input.classList.add("inputNum");
				container.appendChild(input);
				container.appendChild(document.createElement("br"));
				container.appendChild(document.createElement("br"));
			}
		}

		function addValue() {
			var elements = document.getElementsByClassName("inputNum");
			var list = [];
			for (var i = 0, len = elements.length; i < len; i++) {
				list.push(elements[i].value);
			}
			document.getElementById("arrayList").value=list;
			console.log(list);
		}
	</script>
</body>
</html>