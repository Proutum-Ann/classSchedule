let jsonFile = ''
const dropdown = document.getElementById("studentList");
const out = document.getElementById("out");


async function loadSchedule(fileName) {
    try {
        const output = document.getElementById('out');
        output.innerHTML = "Loading...";

        const response = await fetch(`${fileName}Schedule.json`);
        const data = await response.json();

        output.innerHTML = '';

        data.forEach(classes => {
            const classInfo = `
                <div>
                    <strong>Period ${classes.period}:</strong> ${classes.className}<br>
                    Teacher: ${classes.teacher.join(', ')}<br>
                    Room: ${classes.roomNumber}<br>
                    Subject: ${classes.subjectArea}
                    <hr>
                </div>
            `;
            output.insertAdjacentHTML("beforeend", classInfo);
        });
    } catch (error) {
        console.error("Error loading schedule:", error);
        document.getElementById('out').innerHTML = "Error loading schedule.";
    }
}

loadSchedule('annie');

document.getElementById('studentList').addEventListener('change', (event) => {
    const selected = event.target.value;
    loadSchedule(selected);
});


/* fetch(`${student}Schedule.json`)
	.then((response) => response.json())
	.then((data) => {
		console.log(data)
		jsonFile = data

		jsonFile.forEach(classes => {
			
			document.getElementById('out').innerHTML = `${classes.period}`
		})
	}) */
/* document.getElementById('out').insertAjacentHTML("afterend", stuff here) */