var arrayOfQuotes = [
    {
        "author" : "Dr. Seuss",
        "quote"  : " You’re off to great places, today is your day. Your mountain is waiting, so get on your way."
    },
    {
        "author" : "Surya Shankar",
        "quote"  : " You always pass failure on the way to success."
    },
    {
        "author" : "Wolfgang Riebe",
        "quote"  : " No one is perfect - that’s why pencils have erasers."
    },
    {
        "author" : "Bonnie Blair",
        "quote"  : " Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before."
    },
    {
        "author" : "A.A. Mine",
        "quote"  : " You’re braver than you believe, and stronger than you seem, and smarter than you think."
    },
    {
        "author" : "Nelson Mandela",
        "quote"  : " It always seems impossible until it is done."
    },
    {
        "author" : "Helen Keller",
        "quote"  : " Keep your face to the sunshine and you cannot see a shadow."
    },
    {
        "author" : "Zig Ziglar",
        "quote"  : " Positive thinking will let you do everything better than negative thinking will."
    },
    {
        "author" : "Willie Nelson",
        "quote"  : " Once you replace negative thoughts with positive ones, you’ll start having positive results."
    },
]

function randomSelector(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote +'"';
    document.getElementById("authorOutput").innerHTML = '- ' + arrayOfQuotes[randomNumber].author;
}