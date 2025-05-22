async function getDetails(){
    const params= new URLSearchParams(window.location.search);
    const userId=params.get("id");
    const {data}= await axios.get(`https://node-react-10.onrender.com/users/${userId}`);
    console.log(data);

    document.querySelector(".user-id").textContent=data.user._id;
    document.querySelector(".user-name").textContent=data.user.userName;
    document.querySelector(".user-email").textContent=data.user.email;
    document.querySelector(".user-phone").textContent=data.user.phone;
}

getDetails();