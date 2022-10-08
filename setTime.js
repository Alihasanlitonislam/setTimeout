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
//map toiri korar system
const options = ["name", "phone", "email", "address"]
const pitlu = (array, callback = function () { }) => {
    let data = []
    array.forEach(x => {
        const y = callback(x)
        data.push(y)
    })
    return data
}
console.log(pitlu(options, x => x.toUpperCase()))
//heiyar data arra  function add to setTimeout 
const anfrist = (anfrist) => {
    const anlest = (anlest) => {
        const anfull = (anfull) => {
            const data = (data) => {
                return `hay anfrist name ${anfrist} neck name ${anlest} and anfull name ${anfull} welcome to ${data}`
            }
            return data
        }
        return anfull
    }
    return anlest
}
const hello = anfrist("ali");
const word = hello("hasan");
const data = word("liton islam")
console.log(data("bangladesh"))
