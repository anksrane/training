

object Option3 {
  def main(args: Array[String]) {
    val some: Option[Int] = Some(15)
    val none: Option[Int] = None
    
    val x=some.getOrElse(0)
    val y=none.getOrElse(17)
    
    println(x)
    println(y)
  }
}