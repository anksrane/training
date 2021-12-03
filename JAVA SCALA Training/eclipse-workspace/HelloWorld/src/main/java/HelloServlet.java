

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.io.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class HelloServlet
 */
@WebServlet("/helloServlet")
public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String a=request.getParameter("number");
		String[] words=a.toLowerCase().split(" ");
		Map<String,Integer> map=new HashMap<String,Integer>();
		
		for (String word : words) {
			Integer freq=map.get(word);
			if(freq==null) {
				map.put(word, 1);
			}else {
				map.put(word, ++freq);
			}
		}
		System.out.println(map);
		HttpSession session=request.getSession();
		session.setAttribute("InputNum", map);
		response.sendRedirect("index.jsp");
	}

}
