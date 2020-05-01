<script>

let someText = "Font-End Developer on Dooply";
let count = 0 ;
let styles = {
    darkMode: false
}

function  handleClick (){ 
    count += 1;
}

 function toggle () {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
 }

</script>

<style>

.theme-light{
    color: var(--theme-light);
	font-size: 30px;
}
.theme-dark{
    color: var(--theme-dark);
	font-size: 30px;
}

   

</style>

<div class="About">
    {#if !styles.darkMode}
        <p class="theme-light">{someText}</p>
    {:else}
         <p class="theme-dark"><span>HEllO DARK MODE</span></p>
    {/if}
    <button on:click={handleClick}> Click {count === 0 ? '' : count}</button>
    <button on:click={toggle}>Dark Mode</button>
    

</div>