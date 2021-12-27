///FRONT END

// const e = require("express");


document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4001/api/compliment")
    .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4001/api/fortune")
    .then(function (response) {
        const data = response.data;
        alert(data);
      });
    }
///--------ADD NAME AND AGE-------
let submit = document.querySelector('#submitBtn')

let nameInput = document.querySelector('#name')
let ageInput = document.querySelector('#age')



let div = document.createElement('div')
let post = (e) => {
  
  let bodyObj = {
    name: `${nameInput.value}`,
    age: ageInput.value
  }
  // let {name, age} = bodyObj
  

  axios.post('http://localhost:4001/api/nameage',bodyObj)
  .then(function(res) {

    //-------------CREATE NAME & AGE CARD----------
   
  
    let nameAge =[res.data[0].name,res.data[0].age]
    div.innerHTML = JSON.stringify(nameAge)
    
    document.body.appendChild(div)
    
    //-----------------
  })
}

let repeat = 0
let checkRepeat = (e) => {
  e.preventDefault()
  if(repeat === 0) {
    post()
  } else {
    alert(`can't make more users. Please enter correct credentials`)
    location.reload()
  }
  repeat++

}
submit.addEventListener('submit', checkRepeat)


//-----------------------NOW EDIT AGE-------------------------------------------------


let submit2 = document.querySelector('#submitBtn2')
let ageEdit = document.querySelector('#ageEdit')

// console.log(ageEdit.value)
let newAge = ageEdit.value

let ageEdits =0
let checkAgeEdits =(e)=> {
  e.preventDefault()
  if(ageEdits===0){
    editAge()
  } else {
    alert('Can only edit age one!')
    location.reload
  }
}
let editAge = (e) => {
  console.log(ageEdit.value)
  // e.preventDefault()
  let id = 1
  axios.put(`http://localhost:4001/api/nameage`, {age: ageEdit.value})
  .then(function(res) {
    
    console.log(res.data[0].age)
    let nameAge =[res.data[0].name,res.data[0].age]
    div.innerHTML = JSON.stringify(nameAge)
    
    
  })
  ageEdits++
}
submit2.addEventListener('submit', checkAgeEdits)

//----------DELETE YOUR USER-----------------

let deleteBtn = document.querySelector('#deleteBtn')

let deleteUser = () => {
  let id = 1

  axios.delete(`http://localhost:4001/api/nameage/:${id}`)
  .then(function (res) {
  
    
    div.innerHTML = JSON.stringify(res.data)
  })
}



deleteBtn.addEventListener('click', deleteUser)




 