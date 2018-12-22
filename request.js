// await and asyn function
let getpuzzle1= async (wordcount)=>{
  response= await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordcount}`)
  if (response.status==200){
    let data= await response.json()
   return data.puzzle
  }else {
    throw new Error('problem fetching up the data')
  }
}

//  using callback
//  const getpuzzle= (callback)=>{
// const request= new XMLHttpRequest()
// request.addEventListener('readystatechange',function(e){
//     if (e.target.readyState===4 && e.target.status===200){
//     const data= JSON.parse(e.target.responseText)
//     callback(undefined,data)
//   } else if(e.target.readyState===4){
//       callback('Error has been occure',undefined)
//   }
 
// })
// request.open('GET','http://puzzle.mead.io/puzzle?wordCount=2')
// request.send()
// }

//  fetching API using old method using  promise

// let getpuzzle=(wordcount)=> new Promise((resolve,reject)=>{
//   const request= new XMLHttpRequest()
// request.addEventListener('readystatechange',function(e){
//     if (e.target.readyState===4 && e.target.status===200){
//     const data= JSON.parse(e.target.responseText)
//     resolve(data)
//   } else if(e.target.readyState===4){
//     reject(error)
//   } 
// })
// request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordcount}`)
// request.send()
// })
//  fetching API

// let getpuzzle=(wordcount)=>{
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordcount}`).then((response)=>{
//   if( response.status===200){
//      return response.json()
//   } else{
//      throw new Error('problem fetching up the data')
//   }
// }).then((data)=>{
//     return (data.puzzle)
// })
// }


// let getcountry=(iocode)=>new Promise((resolve,reject)=>{
//   request=new XMLHttpRequest()
//   request.addEventListener('readystatechange',(e)=>{
//     if(e.target.readyState===4 && e.target.status===200){
//       var count=JSON.parse (e.target.responseText)
//       let countrydetail=count.find((country)=> country.alpha2Code===iocode)
//       resolve(countrydetail.name)
//     }
//     else if(e.target.readyState===4) {
//       reject('problem fetching the data')
//     }  
    
// })
//   request.open('GET','http://restcountries.eu/rest/v2/all')
//    request.send()
// })
// practice API fetch
// let mylocation=()=>{
//   return fetch('http://ipinfo.io/json?token=1b9056d5b031a2').then((response)=>{
//     if(response.status===200){
//        return response.json()
//     } else{
//       throw new Error('ERROR:')
//     }
// })
// }

