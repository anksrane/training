import scala.concurrent.{ Await, Future}
import scala.concurrent.duration._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.Random
import scala.util.{Success,Failure}


object Futures2 extends App{
  println("Start Calculation")
  
  val f=Future{
    sleep(Random.nextInt(500))
    42
  }
  println("Before On Complete")
  f.onComplete{
    case Success(value)=>println(s"Got the callback, meaning=$value")
    case Failure(e)    =>e.printStackTrace
  }
  
  //do Rest of work
  println("A......")
  sleep(100)
  println("B......")
  sleep(100)
  println("C......")
  sleep(100)
  println("D......")
  sleep(100)
  println("E......")
  sleep(100)
  
  sleep(2000)
  
  def sleep(time:Long){
    Thread.sleep(time)
  }
}