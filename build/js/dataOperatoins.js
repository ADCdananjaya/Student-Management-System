var getData = () => {
    const grid = document.getElementById("studentsGrid");
    fetch("/api/students").then(res => res.json())
    .then(students => {
        students.forEach(student => {
            grid.innerHTML += 
            `
                <div class="h-[21rem] w-60 border border-black rounded-md shadow-lg mx-5 mb-5 flex flex-col justify-center items-center hover:shadow-xl hover:-translate-y-1 bg-green-300">
                    <p class="text-3xl font-bold">Name</p>
                    <p class="text-2xl font-mono mb-3">${student.name}</p>
                    <p class="text-3xl font-bold">Age</p>
                    <p class="text-2xl font-mono mb-3">${student.age}</p>
                    <p class="text-3xl font-bold">University</p>
                    <p class="text-2xl font-mono mb-3">UOK</p>
                    <p class="text-3xl font-bold">skills</p>
                    <p class="text-2xl font-mono">Html, Css, JS</p>
                </div>
            `;
        });
    });
}

getData();