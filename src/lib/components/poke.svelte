<script>
    const {img, name, number, type1, type2, data} = $props()
    import { goto } from '$app/navigation';
</script>

    <div class="pokeContainer" onclick={() => {
        localStorage.setItem("pokeSelected", JSON.stringify(data))
        goto("/pokemon")
    }} > 
        <div class="pokeImgContainer">
            <img src={img} alt="#" class="pokeImg">
        </div>
        <div class="infoContainer">
            <div class="pokeNameContainer">
                <p>{name}</p>
            </div>
            <div class="pokeNumberContainer">
                <p>{number}</p>
            </div>
            <div class="pokeTypeContainer">
                <p>{type1}/{type2}</p>
            </div>
        </div>
    </div>

<style>
    *{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
    }
    .pokeContainer{
        background-color: lightgray;
        border: 2px solid crimson;
        border-radius: 6px;
        width: 20%;
        height: 10%;
        display: flex;
        flex: 1;
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
        margin-top: 7%;
        
    }
    .pokeNameContainer{
        width: 100%;
        font-size: 10px;
        background-color: darkgray;
        border: 1px solid;
        position: relative;
        border-radius: 6px;
        font-size: 14px;
        line-height: 2px;
    }
    .pokeNumberContainer{
        background-color: darkgray;
        border: 1px solid;
        position: relative;
        border-radius: 6px;
        width: 10%;
    }
    .pokeTypeContainer{
        width: 10%;
        height: 10%;
    }
    .infoContainer{
        position: relative;
        left: 10%;
        margin-top: 3%;
        width: 50%;
        text-align: center;
    }
</style>