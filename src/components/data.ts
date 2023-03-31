export async function api() {
	try {

			const arrayStars = []
			for(let i=1; i<10; i++){
			const starw = await (await fetch("https://swapi.dev/api/people/" + i)).json()
			arrayStars.push(starw)
			}
			console.log(arrayStars)
			return arrayStars
	}
	catch(error){
		console.log(error)
	}
}