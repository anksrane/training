

object Yield {

  def main(args: Array[String]) {
    var print = for (i <- 1 to 10) yield i
      println(print.getClass().getSimpleName)
    for (j <- print) {
      println(j)
    }
  }
}