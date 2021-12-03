import scala.concurrent.{ Await, Future}
import scala.concurrent.duration._
import scala.concurrent.ExecutionContext.Implicits.global

object Futures1 extends App{
  val baseTime = System.currentTimeMillis()
  
  val f=Future{
    1+1
  }
  val result=Await.result(f, 1 second)
  println(result)
  println(5)
  sleep(1000)
  
  def sleep(time: Long){
    Thread.sleep(time)
  }
}