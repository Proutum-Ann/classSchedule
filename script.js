const schedulePick = document.getElementById.value
async function loadData() {
	try {

		var schedule = ''
		const ann = fetch("annieSchedule.json")
		const layl = fetch("laylaSchedule.json")

		if (schedulePick === "annie") {
			schedule = ann
		} else if (schedulePick === "layla") {
			schedule = layl
		}

		schedule.forEach(s =>
			h
		)

	} catch {

	}
}

loadData()
