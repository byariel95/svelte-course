<script>
 export let text;
 export let count =0;

</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<button on:click>{text} {count === 0 ? '': count}</button>