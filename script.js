let jsonFile = ''

fetch("annieSchedule.json")
	.then((response) => response.json())
	.then((data) => {
		console.log(data)
		jsonFile = data

		jsonFile.forEach(classes => {
			
			document.getElementById('out').innerHTML = `${classes.period}`
		})
	})

/* document.getElementById('out').insertAjacentHTML("afterend", stuff here) */