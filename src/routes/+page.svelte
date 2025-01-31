<script>
    import {getAllPokes} from "$lib/pokeapi.js";
</script>
<div class="page">
    <div class="search">
        <input type="text" class="searchBox" placeholder="Procure um pokemon aqui">
        <button class="searchButton"><img class="searchImg" src="/assets/lupa.png" alt="#"></button>
    </div>
</div>
<style>
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