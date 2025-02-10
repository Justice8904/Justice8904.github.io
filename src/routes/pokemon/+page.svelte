<script>
    import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
    import sound from '$lib/assets/Sound.png'
    let data = $state(null)
    let dataSpecies = $state(null)
    let cry = $state(null)

    function getData(){
        if(browser){
            let info = localStorage.getItem("pokeSelected")
            if(info == null){
                goto("/")       
            }
            data = JSON.parse(info)
            cry = new Audio(data.cries.latest) 
        }
        
    } 
    getData()
    console.log(data)
    
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
            {data.name}
        </div>

        <div class="typeContainer">

            <div class="type1">
                <p>{data.types.length > 0 ? data.types[0].type.name : ""}</p>
            </div>

            <div class="type2">
                <p>{data.types.length > 0 ? data.types[1].type.name : ""}</p>
            </div>

        </div>

    </div>


    <div class="abilityContainer containerStyle">
        <div class="sessionTitle">
            {data.abilities[0].ability.name}
        </div>
        <div class="sessionDesc">
            
        </div>
    </div>
    <div class="entryContainer containerStyle">
        <div class="sessionTitle">
            Informações de contato
        </div>
        <div class="sessionDesc">
            <ul>
                Emails para contato:
                <li>
                    Estudantil: joao.cavassini@estudante.ifms.edu.br
                </li>
                <li>
                    Pessoal: joao.cavassini12@gmail.com
                </li>
                Telefone:
                <li>
                    (67) 99937-6428
                </li>
                Discord:
                <li>
                    justice8904
                </li>
            </ul>
        </div>
    </div>
    <div class="statsContainer containerStyle">
        <div class="sessionTitle">
            Informações
        </div>
        <div class="sessionDesc">
            <ul>
                Idade:
                <li>
                    16
                </li>
                Escola:
                <li>
                    Instituto Federal de Mato Grosso do Sul
                </li>
                Cursos:
                <li>
                    4º Semestre do Curso Técnico em Informática
                </li>
                Outros Projetos
                <li>
                    Sistema de RPG Sons of the Sun: Dimensions
                </li>
            </ul>
        </div>
    </div>
    <div class="weaknessContainer containerStyle">
        <div class="sessionTitle">
            Meus times Pokemon
        </div>
        <div class="sessionDesc">
            
        </div>
    </div>
</div>

<div class="cryContainer">
    <button class="cryActivator" onclick={() => cry.play()} aria-label="plays cry sound"><img src={sound} alt="#" class="cryImg"></button>
</div>


{/if}



<style>
* {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
p{

    transform: translateY(-60%);

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
    width: 35%;
    height: 10%;

}


.typeContainer{

    display: inline-flex;
    flex: 1;
    margin-top: 2%;
    position: relative;
    width: 100%;
    height: 40%;
    text-transform:uppercase;

}
.type1{
    width: 50%;
    height: 100%;
    background-color: lightgreen;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
}
.type2{
    width: 50%;
    height: 100%;
    background-color: lightsalmon;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
}
.abilityContainer{

    width: 20%;
    position: absolute;
    left: 75%;
    top: 12%;

}
.sessionTitle{

    width: 100%;
    font-size: 20px;
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

    width: 30%;
    height: 40%;
    position: absolute;
    left: 38%;
    top: 30%;

}
.statsContainer{

    width: 20%;
    height: 50%;
    position: absolute;
    left: 75%;
    top: 41%;

}

.weaknessContainer{

    position: absolute;
    top: 79%;
    left: 20%;
    width: 50%;
    height: 12%;
    text-align: center;

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