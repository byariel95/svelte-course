<script>
const skills = [
    {
        id: 1,
        name: 'HTML'
    },
    {
        id: 2,
        name: 'CSS'
    },
    {
        id: 3,
        name: 'JavaScript'
    }
]
</script>

<style>
    .Skills{
        display: flex;
        align-items: center;
        justify-content: center;        
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: nome;
    }
    li{
        display: inline;
        margin: 0 0 0 0.4em;
    }
</style>

<div class="Skills">
    <h3>Habilidades:</h3>
    <ul>
        {#each skills as data, i}
             <li>{data.name}</li>
        {/each}       
    </ul>
    <p>----------------------------------</p>
    <ul>
        {#each skills as {name},i}
             <li>{name}</li>
         {/each}
    </ul>
  
</div>