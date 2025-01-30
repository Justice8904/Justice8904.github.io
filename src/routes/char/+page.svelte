<script>
    import comps from '$lib/components/comps.svelte'
</script>
<style>

</style>
<div>
    <div id="ficha">
        <div class="position-relative">
            <div id="charInfo">

                <input type="text" id="info" placeholder="Nome do Personagem">

                <input type="text" id="info" placeholder="Nome do Player">
        
                <input type="text" id="info" placeholder="Raça">         

                 <input type="text" id="info" placeholder="Classe">

                 <input type="text" id="info" placeholder="Antecedente">

                 <input type="text" id="info" placeholder="Dimensão de Origem">

            </div>

                <div id="charImgContainer">
                        <img id="charImg" src="Sprites/Zeus Wildcard.jpg" alt="#">
                </div>
                <div id="statusBarContainer">
                     <div id="barraDeHp">
                        <label for="barraDeHp">Vitalidade</label>
                    </div>
                    <div id="barraDeEn" >
                        <label for="barraDeEn">Energia</label>
                    </div>
                    <div id="barraDeRs">
                        <label for="barraDeRs">Resiliência</label>
                    </div>
                    <div id="barraDeAl">
                        <label for="barraDeHp">Alma</label>
                    </div>
                    <div id="atrContainer">
                        <input id="def" placeholder="DEF">
                                
                        <input id="ini" placeholder="INI">

                        <input id="exp" placeholder="EXP">
                    </div>
                </div>
                
            </div>
        </div>
    </div>
