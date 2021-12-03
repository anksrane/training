

object IsEmail {
  def isMail(s:String) =
    s match{
    case Email(user,domain)=>println(user+" AT "+domain)
    case _=>println("not an email address")
  }
}