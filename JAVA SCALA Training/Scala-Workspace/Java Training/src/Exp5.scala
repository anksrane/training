

object Exp5 extends App {
  println("hello")

  var lst = List(3, 5)
  println("List: "+lst.getClass().getSimpleName())

  var abc = Array(1, 3)
  println("Array: "+abc.getClass().getSimpleName())

  var pair = (100, "Air India")
  println("Variable: "+pair.getClass.getSimpleName)

  println("Print 1st Element: "+pair._1)  /*Display 1 Element from Tuple*/
  println("Print 2nd Element: "+pair._2)  /*Display 2 Element from Tuple*/

  val tuple: (String, Int) = ("abc", 34) /*Explicitly Declare Type and passing values*/
  var tup1 = (1, 2, 3, 5, 7)
  println(tup1.getClass.getSimpleName)
  
  var jetSet=Set("Boeing","Airbus","Airbus") /*Create a Set. If the duplicate values then it will take only 1 occurance*/
  jetSet+="Lear" /*Add Element to Set*/
  println(jetSet)
  
  println(jetSet.contains("abc")) /*check contains element*/
  println(jetSet.contains("Boeing")) /*check contains element*/
  
  /*Maps Key & Pair*/
  import scala.collection.mutable.Map   
  val mp=Map[Int,String]()  /*Creating map one way*/
  val romanNum1=Map(1->"I",2->"II",3->"III")  /*Creating map one way*/
  mp +=(1->"Hello1")
  mp +=(2->"Hello2")
  mp +=(3->"Hello3")
  println(mp(2))
  println(mp)
  println(romanNum1)
  
  //function with parameter  
 def PrintArgs(args: Array[String]):Unit={
    var i=0
    println("Prining Function")
    while(i<args.length){
      println(args(i))
      i += 1
    }
  }
  PrintArgs(Array("zero","one","two"))
  //function with return
  def checkSting(x: String, y: Int): Int ={
      var c=x.length()
      var ans=c*y
      return ans
  }
  println(checkSting("Ankit",3))
  
  //Pass function as Parameter
  def abcd(var1:String):Unit={
    println(var1.length())
  }
  def printArgs1(args:Array[String]): Unit={
    args.foreach(abcd)
  }
  printArgs1(Array("six","seven","eight"))
}