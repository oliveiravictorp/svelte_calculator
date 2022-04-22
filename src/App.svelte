<script lang="ts">
	import Calculator from "./components/Calculator.svelte";

</script>

<main>
	<Calculator />
</main>

<style>
	:root {
		--background-color: #555;
	}

	:global(body) {
		background-color: black;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
