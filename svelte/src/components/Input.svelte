<script>
    export let name = 'World';
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="Input">
    <input type="text" bind:value={name}>
    <p>Hello {name}</p>
</div>
