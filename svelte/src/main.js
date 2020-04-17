import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ariel',
		lastName: "Monterroso"
	}
});

export default app;