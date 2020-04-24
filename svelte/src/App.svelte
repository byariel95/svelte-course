<script>
	import About from './components/About.svelte';
	import Text from './components/Text.svelte';
	import Person from './components/Person.svelte';

	export let name;
	export let lastName;
	let logo = "https://arepa.s3.amazonaws.com/svelte-logo.png";

	const data = {
		id: 1,
		name: "Ariel",
		lastName: "Monterroso",
		age: 24,	
	};


</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About />
	<Text anotherText="Hola everyone"/>
	<Text/>
	<!--  option 1   --> 
	<Person id={data.id} name={data.name} lastName={data.lastName} age={data.age} />
	<!--  option 2   -->
	<Person {...data} />
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