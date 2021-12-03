

object AnonymousFunctions extends App{
  
  //AnonymousFunctions
  val adder:(Int,Int)=>Int=(a:Int,b:Int)=>a+b
  println(adder(5,7))
  
  val Strlen:(String,Int)=>Int=(a:String,b:Int) =>a.length()*b
  println(Strlen("Hello",3))
  println(Strlen.getClass.getSimpleName)
  
  // No Parameter Function
  val justDoSomething:() =>Int=()=>3
  println(justDoSomething)
  println(justDoSomething())
  
  //Curly Braces with Lambdas
  val stringToInt={(str:String)=>
    str.toInt
  }
  println("Passing String to Int: "+stringToInt("123"))
  
  val niceIncrementer: Int=> Int=_+3  //Equivalent to x=>x+1
  println(niceIncrementer(8))
  
  val niceAdder: (Int, Int)=> Int= _+_  //Equivalent to (a,b)=>a+b
  println(niceAdder(8,4))
  
  val myLambda:(Int,Int,Int)=>Int=_*_*_
  println(myLambda(8,4,2))
   
  //Currying Function
  val calculator = (x:Int)=>(y:Int)=>(z:Int)=> x+x*y*z/100
  println(calculator(5)(10)(20))
  
  val adder2=(x:Int)=>(y:Int)=>x+y
  print(adder2(15)(7))  
}