const schedulePick = document.getElementById.value
async function loadData() {
	try {
		const aSched = await fetch("annieSchedule.json")
		const data1 = await aSched.json()

        if (schedulePick === "annie")
		document.getElementById("out").innerHTML = `
			<h2>${data1.className}</h2>
			<p>${data1.period}</p>
		`
	} catch {
		document.getElementById("out").textContent = "Error loading data."
		console.error("Async error:", err)
	}
}

loadData()
