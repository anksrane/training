

object Option2 {
  def main(args: Array[String]){
   
    //Create Map
    val name=Map("Amit"->"author","Geeta"->"coder")
    
    //Access Keys of the Map
    println(patrn(name.get("Amit")))
    println(patrn(name.get("Geeta")))
    println(patrn(name.get("Sam")))
    println(patrn(name.get("")))
  }
  
  def patrn(z:Option[String])= z match
  {
    case Some(j)=>(j)
    
    /*case None=>("key not found")*/
    
    case _=>("not proper value")
  }
}