setTimeout(function(){
  console.log(" Ali hasan liton islam")
},3000)
//setTimeout 2
function getData(words){
  setTimeout(function(){
    words(" i am learn progrem in javascript")
  },3000)
}
getData(function(data){
  console.log(data)
})
