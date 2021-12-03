

object Mobile {
    //Optional Function
  def apply(user:String, domain:String)=user+"-"+domain
  
  //The Extraction Method (Mandatory)
  def unapply(str:String): Option[(String, String)]={
    val parts = str split "-"
    if(parts.length==2) Some(parts(0).substring(1),parts(1)) else None
  }
}