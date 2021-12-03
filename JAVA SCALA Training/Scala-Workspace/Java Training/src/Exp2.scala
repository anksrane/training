

object Exp2 {
  def main(args: Array[String]) {
    hello()
    max(4, 10)
    greet()
  }
  def hello() { /*Defining Function use def Keyword*/
    val a = "Ankit" /*Var is like a final in java. constant. u can't change or reassign the value*/
    var b = 2 /*var can be treated as normal variable*/
    println(a)
    println(b)
  }
  def max(x: Int, y: Int) = if (x > y) println(x) else println(y) /*Function in Scala*/
  def greet()=println("hello")
}