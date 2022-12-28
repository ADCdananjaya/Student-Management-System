const stuButton = document.getElementById("stButton");
const regButton = document.getElementById("regButton");
const opButton = document.getElementById("opButton");
// const addUser = document.getElementById("submit");

const details = () => {
    return {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        un: document.getElementById("university").value,
        sk: document.getElementById("skills").value
    }
}

stuButton.addEventListener("click", () => {
    window.location.href = "/";
});

regButton.addEventListener("click", () => {
    window.location.href = "/register";
});

opButton.addEventListener("click", () => {
    window.location.href = "/operations";
});

// addUser.addEventListener("click", () => {
//     var dt = details();
    // console.log(dt.name);
    // alert(`/register/query?name=${name}&age=${age}&univeristy=${un}&skills=${sk}`);
    // window.location.href = `/register/query?name=${dt.name}&age=${dt.age}&univeristy=${dt.un}&skills=${dt.sk}`;
    // console.log("user added");
// });

var submit = () => {
    const dt = details();
    fetch("http://localhost:5000/api/students", {
        method: "POST",
        body: JSON.stringify({
            name: "test",
            age: 22
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json()).then(json => console.log(json));
}