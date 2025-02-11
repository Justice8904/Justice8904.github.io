<script>
    import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
    import sound from '$lib/assets/Sound.png'
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
    let data = $state(null)
    let cry = $state(null)

    function getData(){
        if(browser){
            let info = JSON.parse(localStorage.getItem("pokeSelected"))
            if(info == null){
                goto("/")       
            }
            data = info
            cry = new Audio(data.cries.latest)
        }
        
    }

    function getDesc(){
        for(let i = 0; i < data.species.flavor_text_entries.length; i++ ){
            if(data.species.flavor_text_entries[i].language.name == "en"){
                return data.species.flavor_text_entries[i].flavor_text
            }
        }
    }
    

    
    


    getData()

</script>

{#if data != null}
<div class="page">

    <div class="myImgContainer">
        <img src={data.sprites.front_default} alt="#" class="myImg">
    </div>

    <div class="shinyImgContainer">
        <img src={data.sprites.front_shiny} alt="" class="shinyImg"> 
    </div>
    
    <div class="nameContainer containerStyle">

        <div class="sessionTitle">
            {data.name} #{data.id}
        </div>

        <div class="typeContainer">

            <div class="type1">
                <p>{data.types.length >= 0 ? data.types[0].type.name : ""}</p>
            </div>

            <div class="type2">
                <p>{data.types.length > 1 ? data.types[1].type.name : data.types[0].type.name}</p>
            </div>

        </div>

    </div>

    <div class="entryContainer containerStyle">
        <div class="sessionTitle">
            Entrada da Pokedex
        </div>
        <div class="sessionDesc entry">
            {getDesc()}
        </div>
    </div>

    <div class="cryContainer">
        <button class="cryActivator" onclick={() => cry.play()} aria-label="plays cry sound"><img src={sound} alt="#" class="cryImg"></button>
    </div>
</div>

{/if}



<style>
* {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
p{

    transform: translateY(-60%);

}
.entry{

    font-size: 30px !important;

}
.containerStyle {
    
    text-align: center;
    background-color: lightgrey;
    border: 5px solid crimson;
    padding: 1%;
    margin-top: 1%;
}

.myImgContainer{
    border-radius: 200px;
    width: 20%;
    height: 40%;
    position: absolute;
    left: 10%;
    top: 17%;
    border: 15px solid lightblue;
    background-color: var(--theme);
}
.myImg{

    width: 100%;
    height: 100%;
    border: none;
    border-radius: 200px;
}
.cryContainer{

    width: 5%;
    height: 5%;
    position: absolute;
    left: 16%;
    top: 63%;

}
.cryActivator{

    width: 100%;
    height: 100%;
    border: none;
    border-radius: 40px;
    background-color: #9CFFFF;

}
.cryImg{

    width: 100%;

}
.nameContainer{

    position: absolute;
    top: 12%;
    left: 35%;
    width: 60%;
    height: 15%;

}


.typeContainer{

    display: inline-flex;
    flex: 1;
    margin-top: 2%;
    position: relative;
    width: 100%;
    height: 40%;
    text-transform:uppercase;
    font-size: 25px;

}
.type1{
    width: 50%;
    height: 100%;
    background-color: darkgray;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
}
.type2{
    width: 50%;
    height: 100%;
    background-color: darkgray;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
}

.sessionTitle{

    width: 100%;
    font-size: 30px;
    background-color: darkgray;
    border: 3px solid;
    position: relative;
    right: 0.5%;
    bottom: 2%;
    text-transform: capitalize;

}
.sessionDesc{
    position: relative;
    font-size: 16px;
    text-align: justify;
    word-wrap: break-word;
}
.entryContainer{

    width: 55%;
    height: 40%;
    position: absolute;
    left: 38%;
    top: 40%;

}


.shinyImgContainer{

    border-radius: 200px;
    width: 15%;
    height: 30%;
    position: absolute;
    top: 43%;
    border: 10px solid lightgreen;

}

.shinyImg{

    width: 100%;
    height: 100%;
    border: none;
    border-radius: 200px;

}

</style>