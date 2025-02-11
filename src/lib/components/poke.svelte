<script>
    const {img, name, number, type1, type2, data } = $props()
    import { goto } from '$app/navigation';
</script>

    <div class="pokeContainer">
        <button class="pokeButton" onclick={() => {
            localStorage.setItem("pokeSelected", JSON.stringify(data))
            goto("/pokemon")
        }} >
            <div class="pokeImgContainer">
                <img src={img} alt="#" class="pokeImg">
            </div>
            <div class="infoContainer">
                <div class="pokeNameContainer">
                    <p>{name} #{number}</p>
                </div>
                <div class="pokeTypeContainer">
                    <p>{type1}/{(type2 == "" ? type1 : type2)}</p>
                </div>
            </div>
        </button> 
    </div>

<style>
    *{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
    }
    p{

        position: relative;
        top: -25%;

    }
    .pokeContainer{
        background-color: lightgray;
        border: 2px solid crimson;
        border-radius: 6px;
        width: 25%;
        height: 10%;
        display:flex;
        margin: 2%;
        transform: translateX(30%);
    }
    .pokeButton{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .pokeImg{
        width: 100%;
        height: 100%;
        border: 2px solid gray;
        border-radius: 50px; 
    }
    .pokeImgContainer{
        position: relative;
        width: 30%;
        height: 30%;
        left: 3%;
        margin: 3%;
    }
    .pokeNameContainer{
        width: 100%;
        font-size: 16px;
        background-color: darkgray;
        border: 1px solid;
        position: relative;
        top: 10%;
        border-radius: 6px;
        line-height: 2px;

    }
    .pokeTypeContainer{
        background-color: darkgray;
        border-radius: 6px;
        width: 100%;
        height: 30%;
        position: relative;
        top: 15%;
        border: 1px solid black;
        text-align: center;
    }
    .infoContainer{
        position: relative;
        left: 10%;
        margin-top: 5%;
        width: 50%;
        text-align: center;
        text-transform: capitalize;
    }
</style>