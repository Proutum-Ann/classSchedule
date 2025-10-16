async function loadData() {
	try {

		var schedule = ''
		const output = document.getElementById('out')
		output.innerHTML = ''
		const dropdown = document.getElementById('scheduleList')

		const ann = await fetch("annieSchedule.json")
		const dataAnn = await ann.json()
		console.log(dataAnn)

		const layl = fetch("laylaSchedule.json")
		const dataLayl = await layl.json()
		console.log(dataLayl)

		dropdown.addEventListener("change", function(event) {
			const person = event.target.value
			console.log(person)

			if (person === "annie") {
				schedule = dataAnn
			} else if (person === "layla") {
				schedule = dataLayl
			}

			schedule.forEach(s => {
				const cards = document.createElement('div')

				cards.classList = "col-6 col-md-4 col-xl-3 my-2"

				cards.innerHTML = `<p>${s.period}</p>`

				output.appendChild(cards)
			})

		})

	} catch {

	}
}

loadData()
