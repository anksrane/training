

object Inheritance extends App{
  class Animal{
    val creatureType="wild"
    def eat=println("Animal Eat")
  }
  
  class Cat extends Animal{
    def crunch={
      eat
      println("Cat Eat")
    }
  }
  
/*  val cat=new Cat()
  cat.crunch*/
  
  //Constructor
  class Dog(override val creatureType: String) extends Animal{
    //override val creatureType="domestic
    override def eat={
      super.eat
      println("Constructor Print")
    }
  }
  var dog=new Dog("K9")
  dog.eat
  println(dog.creatureType)
}