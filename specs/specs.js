describe('vowel',function(){
it("adds -ay suffix for a word that begins with an a, e, i, o, u", function() {
  expect(vowel("eat")).to.equal("eatay");
 })
});
  it("moves the first letter of a word beginning with any letter other than a, e, i, o, u, to the end of the word then adds -ay suffix", function() {
    expect(vowel("first")).to.equal("irstfay");
  });
