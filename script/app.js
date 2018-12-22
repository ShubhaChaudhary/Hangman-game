// dom()
const puzz = document.querySelector('#puzl')
const p1=document.createElement('p')
// const msg= document.createElement('p')
const status= document.createElement('p')
const puzle =document.createElement('p')
let hangmanword 

let render=()=>{
    p1.innerHTML=''
    hangmanword.setword().split('').forEach(letter => {
        const spn=document.createElement('span')
        spn.textContent=letter
        p1.appendChild(spn)
        puzz.appendChild(p1)
    })
} 
let setpuzzle=async()=>{
    let puzzle=await getpuzzle1(2)
    hangmanword=new Hangman(puzzle,5)
    status.textContent=''
    render()
    // return hangmanword
}

setpuzzle()
// setpuzzle().then((hangmanword)=>{
//     p1.textContent=hangmanword.setword()
//   })
// puzz.appendChild(p1)
document.querySelector('#set').addEventListener('click',setpuzzle)
// ()=>{
//     setpuzzle().then((hangmanword)=>{
//       p1.textContent=hangmanword.setword()
//     })
// })


// puzz.appendChild(p1)
window.addEventListener('keypress',function(e){
    hangmanword.getpuzzel(e.key)
    render()
    status.textContent=hangmanword.currentstatusmsg()
})

puzz.appendChild(status)
// getcountry('AU').then
// mylocation().then((data)=>{
//     // console.log(data.city,data.region)
//     return getcountry(data.country)
// }).then((country)=>{
//     console.log(country)
// }).catch((err)=>{
//         console.log(err)
// })
// let hangmanword = new Hangman('puzzle',3)