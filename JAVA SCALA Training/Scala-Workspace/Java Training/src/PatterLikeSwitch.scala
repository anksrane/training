

object PatterLikeSwitch extends App{
  
  println("Number Pattern: "+test(2))
  println("String Pattern: "+testString("$"))
  
  def test(x:Int):String =x match{
    case 0=>"Hello Ankit"
    case 1|2=>"Monday"        /* | means or Condition like || in Java*/
    case _=>"Wrong Input"
  }

  def testString(x: String): String = x match {
    case "A" => "Hello Ankit"
    case "B"|"$" => "Monday"
    case _ => "Wrong Input"
  }
}