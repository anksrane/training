

object HOF extends App {
  //Function passing to Another Function
  val num = List(7, 8, 9)
  def multiplyValue = (y: Int) => y * 3

  //HOF
  var result = num.map(y => multiplyValue(y))
  println("Multiplied List is:" + result)

  val a = List("Ankit")
  def reverseString = (b: String) => b.reverse

  var b = a.map(b => reverseString(b))
  print(b)
}