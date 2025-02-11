<script>
    import Poke from "$lib/components/poke.svelte"
    import { getAllPokes } from "$lib/pokeapi"
    import { onMount } from 'svelte';

    let pokemons = $state([])
    let species = $state([])

    onMount(async () => {
        let allPokes = await getAllPokes()

    for(let i = 0; i < allPokes.length; i++){
        let request = await fetch(allPokes[i].url)
        let data = await request.json()
        let species = await fetch(data.species.url)
        species = await species.json()
        data.species = species
        pokemons.push(data)
    }})

</script>

<div class="dex">
        {#each pokemons as pokemon}
                <Poke name={pokemon.name} number={pokemon.id} img={pokemon.sprites.front_default} type1={pokemon.types.length > 0 ? pokemon.types[0].type.name : ""} type2={pokemon.types.length > 1 ? pokemon.types[1].type.name : ""} data={pokemon}/>            
        {/each}       
</div>

<style>
    .dex{
        width: 100%;
        height: 100%;
        overflow: auto;
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-wrap: wrap;
    }
</style>