

object Exp4 {
  def main(args: Array[String]){
    val greetStrings=new Array[String](3)
    greetStrings.update(0,"Hello")
    greetStrings.update(1,",")
    greetStrings.update(2,"World!\n")
    
    for(i <-0.to(2))
      print(greetStrings.apply(i))
      
    val numNames=Array("zero","one","two") /*Create Array and Convert it to list*/
    println(numNames.toList)
    
    val oneTwoThree=List(1,2,3)
    println(oneTwoThree)
    
    val oneTwo=List(1,2)
    val threeFour=List(10,3,4,5)
    val oneTwoThreeFour=oneTwo:::threeFour
    println("oneTwoThreeFour"+oneTwoThreeFour)
    
    val twoThree=List(2,3)
    val onetwoThree=1::twoThree
    print(onetwoThree)
  }
}