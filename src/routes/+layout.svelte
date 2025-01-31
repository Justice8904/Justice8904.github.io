<script>
    let { children } = $props();
</script>
<div class="main">
    <div class="titleCard">
        <h1 >Projeto Pokedex</h1>
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



.titleCard{

position: relative;
width: 100%;
height: 30%;
background-color: #ff2626;
color: #ffe063;
align-content: center;
text-align: center;
font-family:Verdana, Geneva, Tahoma, sans-serif;

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

font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
font-size: larger;
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
