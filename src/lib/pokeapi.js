export async function getAllPokes() {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1500')
    data = await data.json()
    return data != null ? data.results : alert("Erro!")
}

export async function getSinglePoke(name) {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/'+name)
    data = await data.json()
    return data != null ? data.results : alert("Erro!")
}
export async function getAllSpecies() {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=1500')
    data = await data.json()
    return data != null ? data.results : alert("Erro!")
}