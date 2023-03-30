export async function api() {
	try {
			const starw = await fetch("https://swapi.dev/api/people/").then((res) => {
				return res.json();
			});
			return starw;
	} catch (error) {
		console.log(error);
	}
}