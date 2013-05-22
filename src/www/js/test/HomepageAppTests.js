test( "testMe test!", function() {
  ok( application.testPublicFunction("happy"),"Function returned a value");
  equal( application.testPublicFunction("happy"),"happy", "Same value returned as passed to function");
  notEqual( application.testPublicFunction("happy"),"happy", "A different value was not returned by the function");
});