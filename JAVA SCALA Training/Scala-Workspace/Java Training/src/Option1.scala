

object Option1 {
  def main(args: Array[String]){
   
    //Create Map
    val name=Map("Amit"->"author","Geeta"->"coder")
    
    //Access Keys of the Map
    val x=name.get("Amit")
    val y=name.get("Rohit")
    
    //Display
    println("Access Key X: "+x)
    println("Access Key Y: "+y)
    
    println(x.getClass.getName)
    println(y.getClass.getName)
  }
}