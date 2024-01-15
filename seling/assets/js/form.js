let divform = document.getElementById("divform")
let email = document.getElementById("email")
let password = document.getElementById("password")
let product = document.getElementById("product")

divform.addEventListener('submit' , (e)=>{
e.preventDefault() 
axios.post('https://655c839c25b76d9884fd6e12.mockapi.io/Namiq', {
    email : email.value ,
    password: password.value
  })
  divform.reset()

 
  })
  async function get() {
   const res = await axios.get("https://655c839c25b76d9884fd6e12.mockapi.io/Namiq")
    data = res.data 
    db = data
    db.map(item => {
        const box = document.createElement("div")
        box.className = " box col-12 col-sm-6 col-lg-4"
        box.innerHTML = `
        <div class="boxes">
        <p class="email">${item.email}</p>
        <p class="password" >${item.password}</p>
        <button class="add" onlick="deleteData"${item.id} >Delete</button>
      </div>
        `
        product.appendChild(box)
    } )
  }
get()

import axios from 'axios';
const deleteData = async (id) => {
   try {
      const response = await axios.delete(`https://example.com/api/data/${id}`);
      console.log(response.data);
   } catch (error) {
      console.error(error);
   }
};