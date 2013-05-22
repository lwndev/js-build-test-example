test( "testMe test!", function() {
  ok( testMe("happy"),"testMe asserted successfully");
  notEqual( testMe("unhappy"), true, "testMe failed as expected");
});

test( "testMe testers!", function() {
  ok( testMe("happy"),"testMe asserted successfully");
  notEqual( testMe("unhappy"), true, "testMe failed as expected");
});