

object TraitDemo extends App {
  //Class 'extends' parent class and implements ('with') traits
  //Class 'extends' trait and implement('with') traits
  trait A{
    def print()
  }
  trait B{
    def show()
  }
  
  class C extends A with B{
    def print(){
      println("Print Class C")
    }
    def show(){
      println("Show Class C")
    }
  }  
  var obj=new C()
  obj.print()
  obj.show()
  
  //class A extends class B
  //class A extends trait A with trait B
  //class A extends class B with trait A,  TraitB
}