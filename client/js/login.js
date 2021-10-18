$(document).ready(function(){
  $("#btn-login").click(function(){
    var username = $('#inputUsername').val();
    var password = $('#inputPassword').val();
    var payload = {username: username, password: password};

    $.ajax({
      type: 'POST',
      url: "http://localhost:8080/login",
      data: JSON.stringify(payload),
      dataType: "json",
      contentType: "application/json"
    })
    .fail(function(data){
      alert("Whoops, try again");
    })
    .done(function(data){
      localStorage.jwt = data.token;
      var username = JSON.parse(atob(data.token.split('.')[1]))['sub'];
      localStorage.username = username;
      window.location.replace("index.html");
    })
  })
});

AtomicInteger aInt1 = new AtomicInteger(0);
AtomicInteger aInt2 = new AtomicInteger(0);

if (aInt1.equals(aInt2)) { ... }  // Noncompliant


  protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
      .antMatchers("/resources/**", "/signup", "/about").permitAll() // Compliant
      .antMatchers("/admin/**").hasRole("ADMIN")
      .antMatchers("/admin/login").permitAll() // Noncompliant; the pattern "/admin/login" should occurs before "/admin/**"
      .antMatchers("/**", "/home").permitAll()
      .antMatchers("/db/**").access("hasRole('ADMIN') and hasRole('DBA')") // Noncompliant; the pattern "/db/**" should occurs before "/**"
      .and().formLogin().loginPage("/login").permitAll().and().logout().permitAll();
  }

GET /pageSomeWhere HTTP/1.1
Host: webSite.com
User-Agent: Mozilla/5.0
Cookie: JSESSIONID=Hacked_Session_Value'''">
