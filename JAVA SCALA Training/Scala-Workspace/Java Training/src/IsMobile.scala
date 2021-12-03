

object IsMobile {
    def isMOb(s:String) =
    s match{
    case Mobile(country,mobile)=>println("Country Code is: "+country+", Number is:  "+mobile)
    case _=>println("not an valid mobile")
  }
}