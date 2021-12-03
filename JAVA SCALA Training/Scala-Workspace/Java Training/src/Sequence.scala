

object Sequence extends App {
  val aSequence=Seq(1,3,2,4)
  println("aSequence Print: "+aSequence)

  println("aSequence Reverse: "+aSequence.reverse)
  println("aSequence Data Type: "+aSequence.getClass.getName)
  println("aSequence Specific Element: "+aSequence(2))
  val abc=aSequence ++ Seq(7,5,6)
  println("Merging Sequence: "+abc)
  println("aSequence Sorted: "+aSequence.sorted)
  
  //Ranges
  val aRange:Seq[Int]=1 until 10
  println("Print Array")
  aRange.foreach(println)
  
  //List
  val aList=List(1,2,3)
  val prepend=42+:aList:+89
  println("Afte Prepend & Apend: "+prepend)
  
  val apples=List.fill(5)("apple")
  println(apples)
  println(aList.mkString("-|-"))  
}