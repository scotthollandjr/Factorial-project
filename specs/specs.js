describe('factorIt', function() {
  it("numbers less than 0 should return as invalid", function() {
    expect(factorIt(-1)).to.equal(true);
  });
});
