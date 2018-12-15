 
const Hangman= function(word,number){
    this.word= word.toLowerCase().split('')
    this.attempt= number
    this.guessletter=[] 

}
Hangman.prototype.setword=function(){
    puzzel=''
    this.word.forEach(letter=> {
        if (this.guessletter.includes(letter) || letter ===' '){
        puzzel += letter
        } else{
        puzzel+= '*'
        }
    });
      return puzzel
     
 };
Hangman.prototype.getpuzzel=function(letter){
     letter.toLowerCase()
    const uniqueletter=!this.guessletter.includes(letter)
    const badguess=!this.word.includes(letter)

    if (uniqueletter) {
     this.guessletter.push(letter)
    } if (uniqueletter && badguess) {
       this.attempt--
    }
    return (`you have ${this.attempt} attempt left`)
}
const hangmanword=new Hangman('prashant chaudhary',20)
  