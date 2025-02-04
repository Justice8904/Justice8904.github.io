<script>
    let { children } = $props();
</script>
<div class="main">
    <div class="titleCard">
        <div class="title">Projeto Pokedex</div>
    </div>
    <nav class="navbar">
        <div class="navContainer">
            <a class="navbtn " href="/">Pesquisar</a>
            <a class="navbtnCenter navbtn" href="/dex">Pokedex</a>
            <a class="navbtn" href="/about">Sobre</a>
        </div>
    </nav>
</div>

<style>

* {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}

.titleCard{

position: relative;
width: 100%;
height: 15%;
background-color: #ff2626;
color: #ffe063;
align-content: center;
text-align: center;
font-size: xx-large;
font-weight: 900;


}
.title{

    margin: 0.5%;

}

.navbar{

background-color: #8aa5ff;

}

.navContainer{

display: flex;
margin: auto;
justify-content: center;
align-items: center;

}
.navbtn{

color: white;
font-size: medium;
text-decoration: none;
margin-left: 0.5%;
padding: 0.5%;

}
.navbtnCenter{

border-left: 3px white solid;
border-right: 3px white solid;

}

</style>

{@render children()}
