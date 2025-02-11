<script>
    import {getAllPokes, getSinglePoke} from "$lib/pokeapi.js";
    import	Lupa from "$lib/assets/lupa.png"
    import { goto } from  '$app/navigation';
    let search = $state("")
    async function searchPoke() {
        let data = await getSinglePoke(search)
        let species = await fetch(data.species.url)
        species = await species.json()
        data.species = species
        localStorage.setItem("pokeSelected", JSON.stringify(data))
        goto("/pokemon")
    }
</script>
<div class="page">
    <div class="search">
        <input type="text" class="searchBox" placeholder="Procure um pokemon aqui" bind:value={search}>
        <button class="searchButton" onclick={async () => await searchPoke()}><img class="searchImg" src={Lupa} alt="#"></button>
    </div>
</div>
<style>
    * {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
    }
    
    .page{

        width: 100%;
        height: 100%;

    }

    .search{

        position: absolute;
        left: 50%;
        top: 30%;
        width: 70%;
        height: 10%;
        transform: translateX(-50%);
        display: flex;
        flex: 1;
        border: 10px white;
        
        
    }
    .searchBox{

        border: 0px none;
        width: 100%;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        font-size: 24px;
        padding-left: 1%;
        
    }
    .searchButton{

        width: 10%;
        border: 0px none;
        background-color:#ff2626;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        

    }
    .searchImg{

        max-height: 80%;

    }
</style>