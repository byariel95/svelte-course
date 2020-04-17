<script>
	export let name;
	export let lastName;
	let logo = "https://arepa.s3.amazonaws.com/svelte-logo.png"
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
	Harum dolorum ab, incidunt quae odio est accusantium, voluptatum tempore, 
	cumque repudiandae molestias ea mollitia similique aperiam adipisci ipsa deleniti id aliquid?</p>
	<img src={logo} alt="logo">
</main>

<style>

	:global(body){
		background-color: #f2eee2;
		color: #0084f6
	} 

	:global(:root){
		--theme-color: purple;
	}

	p{
		color: var(--theme-color);
		font-size: 22px;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main img {
		width: 40%; 
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>