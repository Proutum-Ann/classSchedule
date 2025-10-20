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

		// Generate a card for each class

        data.forEach(classes => {

			let headerBG = ''
			let headerText = ''
			let cardBG = ''

			//Change colors based off of subject

			if (classes.subjectArea === "Math") {
				headerBG = '#5356ff'
				headerText = '#ddecff'
			} else if (classes.subjectArea === "English") {
				headerBG = '#2dff1a'
				headerText = '#047223'
			} else if (classes.subjectArea === "Science") {
				headerBG = '#3fffff'
				headerText = '#0c7785'
			} else if (classes.subjectArea === "Technology") {
				headerBG = '#a9a2ff'
				headerText = '#141eac'
			} else if (classes.subjectArea === "Physical Education" || classes.subjectArea === "Health") {
				headerBG = '#81ff76'
				headerText = '#168036'
			} else if (classes.subjectArea === "Visual Arts" || classes.subjectArea === "Performing Arts") {
				headerBG = '#ecff40'
				headerText = '#ad4e00'
			} else if (classes.subjectArea === "Social Studies") {
				headerBG = '#91ca85'
				headerText = '#4b5c24'
			} else {
				headerBG = '#8d8d8d'
				headerText = '#fff'
			}

			//change color based off of hallway
			if (classes.roomNumber.startsWith("A")) {
				cardBG = '#ffdcda'
			} else if (classes.roomNumber.startsWith("B")) {
				cardBG = '#d1f8ff'
			} else if (classes.roomNumber.startsWith("C") || classes.roomNumber === "GYM") {
				cardBG = '#d3ffc8'
			} else if (classes.roomNumber.startsWith("D")) {
				cardBG = '#fff4d1'
			} else if (classes.roomNumber.startsWith("E")) {
				cardBG = '#d1d4ff'
			} else {
				cardBG = '#fff'
			}

			//Actual card
            const classInfo = `
				<div class="col-12 col-md-4 my-2">
					<div class="card border-10 px-2 py-1 h-100" style="background: ${cardBG}">
						<h5 class="card-header border-0" style="background-color: ${headerBG}; color: ${headerText}; border-radius: 10px">${classes.className}</h5>
						<p class="card-text p-2">
							<b>Period ${classes.period}</b><br>
							<b>Teacher:</b> ${classes.teacher.join(', ')}<br>
							<b>Room:</b> ${classes.roomNumber}<br>
							<b>Subject:</b> ${classes.subjectArea}
						</p>
					</div>
				</div>
            `;
            output.insertAdjacentHTML("beforeend", classInfo);
        });
    } catch (error) {
        console.error("Error loading schedule:", error);
        out.innerHTML = "Error loading schedule.";
    }
}

loadSchedule(dropdown.value);

//I'm gonna explode
document.getElementById('studentList').addEventListener('change', (event) => {
    const selected = event.target.value;
    loadSchedule(selected);
});

//keydown stuff
addEventListener("keydown", (event) => {
	h
})

onkeydown = (event) => { }