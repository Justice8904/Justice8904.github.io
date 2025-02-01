<script>
    import {getSinglePoke} from "$lib/pokeapi.js";
</script>

<div class="page">
    <div class="myImgContainer">
        <img src="src/lib/assets/Foto.jpg" alt="#" class="myImg">
    </div>
    <div class="shinyImgContainer">
        <img src="src/lib/assets/Justice Foto.jpg" alt="" class="shinyImg"> 
    </div>
    <div class="nameContainer">
        <div class="name">
            João Bortolucci Cavassini
        </div>
        <div class="typeContainer">
            <div class="type1">
                Mestre de RPG   
            </div>
            <div class="type2">
                Programador
            </div>
        </div>
    </div>
    <div class="abilityContainer">
        <div class="sessionTitle">
            
        </div>
        <div class="sessionDesc">
            
        </div>
    </div>
    <div class="entryContainer">
        <div class="sessionTitle">
            Informações de Contato
        </div>
        <div class="sessionDesc">
            SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT
        </div>
    </div>
    <div class="statsContainer">
        <div class="sessionTitle">
            Informações
        </div>
        <div class="sessionDesc">
            SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT            
        </div>
    </div>
    <div class="weaknessContainer">
        <div class="sessionTitle">
            Meus Pokemons Favoritos
        </div>
        <div class="sessionDesc">
            SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT           
        </div>
    </div>
</div>

<style>

.myImgContainer{


    border-radius: 50%;
    width: 20%;
    height: 40%;
    position: absolute;
    left: 10%;
    top: 17%;
    border: 15px solid lightblue;


}
.myImg{

    max-width: 100%;
    min-width: 100%;
    max-height: 100%;
    min-height: 100%;
    border: none;
    border-radius: 50%;
}
.nameContainer{

    position: absolute;
    top: 12%;
    left: 35%;
    width: 35%;
    height: 10%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-top: 0.5%;
    background-color: lightgrey;
    border: 5px solid crimson;
    padding: 0.5%;

}
.name{

    width: 100%;
    font-size: 25px;
    background-color: darkgray;
    border: 3px solid;
    position: relative;
    right: 0.5%;
    bottom: 2%;

}
.typeContainer{


    position: relative;
    width: 100%;
    height: 40%;
    display: inline-flex;
    border: 2px solid black;
    border-radius: 40px;

}
.type1{

    width: 50%;
    height: 100%;
    font-weight: 600;
    background-color: lightgreen;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;

}
.type2{

    width: 50%;
    height: 100%;
    font-weight: 600;
    background-color: lightsalmon;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;

}
.abilityContainer{

    width: 20%;
    position: absolute;
    left: 75%;
    top: 12%;
    margin: 0.5%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: lightgrey;
    border: 5px solid crimson;
    padding: 0.5%;
}
.sessionTitle{

    font-size: 23px;
    text-align: center;
    border: 5px solid black;
    font-weight: 900;

}
.sessionDesc{

    font-size: 18px;
    text-align: justify;

}
.entryContainer{

    border: 10px solid black;
    width: 25%;
    height: 40%;
    position: absolute;
    left: 40%;
    top: 30%;
    margin: 0.5%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}
.statsContainer{

    border: 10px solid black;
    width: 20%;
    height: 50%;
    position: absolute;
    left: 75%;
    top: 41%;
    margin: 0.5%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}

.weaknessContainer{

    position: absolute;
    top: 79%;
    left: 20%;
    border: 10px solid black;
    width: 50%;
    height: 12%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-top: 0.5%;

}

.shinyImgContainer{

    border-radius: 50%;
    width: 15%;
    height: 30%;
    position: absolute;
    top: 43%;
    border: 10px solid lightgreen;

}

.shinyImg{

    max-width: 100%;
    min-width: 100%;
    max-height: 100%;
    min-height: 100%;
    border: none;
    border-radius: 50%;

}
</style>