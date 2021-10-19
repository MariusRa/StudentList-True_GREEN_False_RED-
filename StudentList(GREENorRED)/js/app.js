const getData = new XMLHttpRequest();
getData.onreadystatechange = function () {
    if (getData.readyState === 4) {
        const students = getData.responseText;
        const studentsList = JSON.parse(students);
        const aside = document.querySelector('aside');

        for (let x = 0; x < studentsList.length; x++) {
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            if (studentsList[x].location === true) {
                li.setAttribute('class', "green")
                li.textContent = studentsList[x].name;
                aside.appendChild(li);
            } else {
                li.setAttribute('class', "red")
                li.textContent = studentsList[x].name;
                aside.appendChild(li);
            }
        }
        console.log(students)
    }
}

getData.open('GET', 'data/students.json');

getData.send();





