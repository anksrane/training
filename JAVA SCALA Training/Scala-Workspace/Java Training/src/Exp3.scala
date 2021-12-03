

object Exp3 {
  def main(args:Array[String]){
    val big=new java.math.BigInteger("123456") /*Object Creation*/
    println("big["+(big)+"]")    
    
    val greetStrings=new Array[String](3)  /*Array Creation*/
    greetStrings(0)="hello"
    greetStrings(1)=", "
    greetStrings(2)="world!\n"
    for(i <-0 to 2)
      print(greetStrings(i))
      
    val numbers=new Array[Integer](3)
    numbers(0)=25
    numbers(1)=25
    numbers(2)=25
    for(i <-0 to 2)
      print(numbers(i)+" ")
  }
}