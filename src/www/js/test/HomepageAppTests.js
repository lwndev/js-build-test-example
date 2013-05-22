test( "Test publicFunction", function() {
  ok( application.publicFunction("foo"),"Function should return a value");
  equal( application.publicFunction("foo"),"foo", "Same value returned as passed to function");
  notEqual( application.publicFunction("foo"),"bar", "A different value was not returned by the function");
});