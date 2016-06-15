describe("regexpert", function(){

  var levelText, target;

  beforeEach(function(){
    browser.get('/');
    levelText = 'Horse brHeeding is reproduction in horses, and particularly the human-directed process of selective breeding of animals, particularly purebred horses of a given breed. Planned matings can be used to produce specifically desired characteristics in domesticated horses. Furthermore, modern breeding management and technologies can increase the rate of conception, a healthy pregnancy, and successful foaling.';
    levelText2 = 'Holder text for now. We rule!';
    expectation = 'HPF';
  });

  it('highlights text based on input', function(){
    $('input#user-input').sendKeys("[a-p]");
    expect($('p#level-text').$$('span.plain').first().getText()).toEqual('H');
    expect($('p#level-text').$$('span.search').first().getText()).toEqual('o');
    expect($('p#level-text').$$('span.target').first().getText()).toEqual('i');
    expect($('p#level-text').$$('span.target.search').first().getText()).toEqual('i');
  });

  it('a game can be won', function(){
    expect($('span#win-message').getText()).not.toMatch('WINNER');
    expect($('p#level-text').getText()).toEqual(levelText);
    $('input#user-input').sendKeys('\\b[a-z]..\\b');
    expect($('span#win-message').getText()).toEqual('WINNER');
  });
<<<<<<< HEAD

  it('a next level button appears when the game is won', function(){
    $('input#user-input').sendKeys("\\b[HPF]");
    expect($('button#next-level').isPresent()).toBe(true);
  });

  it('loads level 2', function() {
    $('input#user-input').sendKeys("\\b[HPF]");
    $('button#next-level').click();
    expect($('section#level-number').getText()).toEqual('Level: 2');
    expect($('p#level-text').getText()).toEqual(levelText2);
  });

=======
>>>>>>> 318ebfe8a400ce9b95c35cff0648e32ee783f38b
});
