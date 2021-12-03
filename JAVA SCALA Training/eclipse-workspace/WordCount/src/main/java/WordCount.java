

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class WordCount
 */
@WebServlet("/wordCount")
public class WordCount extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WordCount() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/*
		 * // TODO Auto-generated method stub
		 * response.getWriter().append("Served at: ").append(request.getContextPath());
		 */
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String a=request.getParameter("Sentence");
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
		session.setAttribute("Output", map);
		response.sendRedirect("index.jsp");
	}

}
