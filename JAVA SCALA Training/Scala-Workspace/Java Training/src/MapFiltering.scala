

object MapFiltering extends App {
  
  val list=List(10,20,30,40)
  println("List Head: "+list.head)
  println("List Tail: "+list.tail)
  
  //map function of list
  println("Map: "+list.map(_+ 1))
  println("Map: "+list.map(_+ "is a number"))
  
  //filter
  println("Filter: "+list.filter(_ %3!=0))
  
  //flatMap
  val toPair=(x:Int)=>List(x,x+1)
  println("FlatMap: "+list.flatMap(toPair))
  
  //map
  println("Map: "+list.map(toPair))
  
  val numbers=List(1,2,3,4)
  val chars=List('a','b','c','d')
  val colors=List("black","white")
  
  val combinations = numbers.filter(_ % 2 == 0)
                            .flatMap(n => chars.flatMap(c => colors.map(color => "" + c + n + "-" + color)))
  println("Combinations: "+combinations)
  val combinations1=numbers.filter(_%2==0).flatMap(toPair)        
  println("Combinations1: "+combinations1)
  
}