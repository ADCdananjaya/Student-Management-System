const stuButton = document.getElementById("stButton");
const regButton = document.getElementById("regButton");
const opButton = document.getElementById("opButton");
const addUser = document.getElementById("submit");

const details = () => {
    return {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        un: document.getElementById("university").value,
        sk: document.getElementById("skills").value
    }
}

// const name = document.getElementById("name").value;
// const age = document.getElementById("age").value;
// const un = document.getElementById("university").value;
// const sk = document.getElementById("skills").value;

stuButton.addEventListener("click", () => {
    window.location.href = "/";
});

regButton.addEventListener("click", () => {
    window.location.href = "/register";
});

opButton.addEventListener("click", () => {
    window.location.href = "/operations";
});

addUser.addEventListener("click", () => {
    var dt = details();
    // console.log(dt.name);
    // alert(`/register/query?name=${name}&age=${age}&univeristy=${un}&skills=${sk}`);
    window.location.href = `/register/query?name=${dt.name}&age=${dt.age}&univeristy=${dt.un}&skills=${dt.sk}`;
});