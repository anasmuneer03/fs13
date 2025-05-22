const addUserForm= document.querySelector('.create-form');
addUserForm.onsubmit= async function(e){
    e.preventDefault();

    const user={
        userName: e.target.userName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        phone: e.target.phone.value
    }
    try{
    const responce= await axios.post("https://node-react-10.onrender.com/users",user);
    window.location.href='./index.html';
    }
    catch(e){
        document.querySelector(".text-danger").textContent=e.message;
    }
}