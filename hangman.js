const Hangman= function(word,number){
    this.word= word.toLowerCase().split('')
    this.attempt= number
    this.guessletter=[]
    this.status= 'playing' 

}
Hangman.prototype.currentstatus=function(){
    if (this.attempt===0){
    this.status='failed'
    return this.status
    } else if(puzzel===this.word.join('')){
     this.status='finished'
     return this.status
    }
}
Hangman.prototype.currentstatusmsg=function(){
  if (this.status==='failed'){
  return( `Some time you win .Some time you learn! Nice try.The word is ${this.word.join('')}`)
  }
  else if (this.status==='playing')
 {
    return(`You have ${this.attempt} attempt left`) 
  }
  else {
      return('Winning is only half of it,Having fun is the other half')
  }
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
      this.currentstatus()
      return puzzel
     
 };
Hangman.prototype.getpuzzel=function(letter){
    while(this.status=='playing'){
     letter.toLowerCase()
    const uniqueletter=!this.guessletter.includes(letter)
    const badguess=!this.word.includes(letter)

    if (uniqueletter) {
     this.guessletter.push(letter)
    } if (uniqueletter && badguess) {
       this.attempt--
    }
    this.currentstatus()
   return this.attempt 
    // return (`you have ${this.attempt} attempt left`)
}
}

// let hangmanword = new Hangman('puzzle',3)