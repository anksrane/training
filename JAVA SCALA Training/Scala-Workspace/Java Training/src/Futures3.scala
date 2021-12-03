import scala.concurrent.{ Await, Future }
import scala.concurrent.duration._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.Random
import scala.util.{ Success, Failure }

object Futures3 extends App {
  val f = Future {
    val time = Random.nextInt(500)
    println(time)
    sleep(time)
    if (time > 250)
      throw new Exception("Hello Exception")
    else
      41
  }
  f onSuccess {
    case result => println(s"Sucess: $result")
  }
  f onFailure {
    case e => println(s"Exception: ${e.getMessage}")
  }

  //do Rest of work
  sleep(500)
  println("A......")
  sleep(500)
  println("B......")
  sleep(100)
  println("C......")
  sleep(100)
  println("D......")
  sleep(100)
  println("E......")
  sleep(100)

  sleep(2000)

  def sleep(time: Long) {
    Thread.sleep(time)
  }
}