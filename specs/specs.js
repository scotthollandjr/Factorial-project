describe('factorIt', function() {
  it("numbers less than 0 should return as -1", function() {
    expect(factorIt(-1)).to.equal(-1);
  });

  it("an entry of zero (0) should return 1", function() {
    expect(factorIt(0)).to.equal(1);
  });
});
