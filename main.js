async function getUsers(){
try{
const {data}= await axios.get('https://node-react-10.onrender.com/users');
// console.log(data);
let html='';
for(let i=0;i<data.users.length;i++){
    html+=`<tr>
    <td>${data.users[i]._id}</td>
    <td>${data.users[i].userName}</td>
    <td>${data.users[i].email}</td>
    <td class="d-flex gap-10 justify-content-center">
    <a class="btn btn-primary" href="./details.html?id=${data.users[i]._id}">details</a>
    <button onclick="deleteUser('${data.users[i]._id}')" class="btn btn-danger">delete</button>
    <a class="btn btn-sec" href="./edit.html?id=${data.users[i]._id}">Edit</a>
    </td>
    </tr>`
}
    
document.querySelector('.users-data').innerHTML=html;
} 
catch(e){
document.querySelector(".text-danger").textContent=e.message;
}
finally{
document.querySelector(".loader-container").classList.add("d-none");
}
}

getUsers();

async function deleteUser(id){
    Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then(async(result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    const responce= await axios.delete(`https://node-react-10.onrender.com/users/${id}`);
    location.reload();
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
}

