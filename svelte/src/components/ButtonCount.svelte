<script>
 import { count } from '../store/store.js';

 function handlClick() {
     count.update(n => n + 1);
 }
     
</script>

<style>
button {
    color: white;
    background-color: #f76027;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;

}
</style>

<button on:click={handlClick}> Click {$count === 0 ? '': $count} </button>