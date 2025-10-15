async function loadData() {
	try {
		const aSched = await fetch("annieSchedule.json")
		const data1 = await aSched.json()

		document.getElementById("out").innerHTML = `
			<h2>${data1.name}</h2>
			<p>${data1.role}</p>
		`
	} catch {
		document.getElementById("out").textContent = "Error loading data."
		console.error("Async error:", err)
	}
}

loadData()
