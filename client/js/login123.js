SecureRandom sr = new SecureRandom();
sr.setSeed(123456L); // Noncompliant
int v = sr.next(32);

sr = new SecureRandom("abcdefghijklmnop".getBytes("us-ascii")); // Noncompliant
v = sr.next(32);



@Override
protected void configure(HttpSecurity http) throws Exception {
   http.sessionManagement()
     .sessionFixation().none(); // Noncompliant: the existing session will continue
}
