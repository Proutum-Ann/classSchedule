let jsonFile = ''

fetch("annieSchedule.json")
	.then((response) => response.json())
	.then((data) => {
		jsonFile = data

		jsonFile.forEach(classes => {
			
			document.getElementById('out').innerHTML = `<p>${classes.period}</p>`
		})
	})

/* document.getElementById().insertAjacentHTML("afterend", stuff here) */