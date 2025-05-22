async function getDetails() {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");
  const { data } = await axios.get(
    `https://node-react-10.onrender.com/users/${userId}`
  );

  document.querySelector(".user-name").value = data.user.userName;
  document.querySelector(".user-email").value = data.user.email;
  document.querySelector(".user-password").value = data.user.password;
  document.querySelector(".user-phone").value = data.user.phone;
}

getDetails();

const addUserForm = document.querySelector(".create-form");
addUserForm.onsubmit = async function (e) {
  e.preventDefault();
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");
  const userName = { userName: e.target.userName.value };
  try {
    const responce = await axios.put(
      `https://node-react-10.onrender.com/users/${userId}`,
      userName
    );
    window.location.href = "./index.html";
  } catch (e) {
    document.querySelector(".text-danger").textContent = e.message;
  }
};
