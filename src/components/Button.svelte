<script lang="ts">
  export let text :string
  export let double :boolean = false
  export let triple :boolean = false
  export let operation :boolean = false
  export let highlight :boolean = false
  export let onClick :(value :string) => void = () => {}
</script>

<button class="button"
  class:double class:triple class:operation class:highlight
  on:click={() => onClick(text)}>
  {text}
</button>

<style>
  .button {
    margin: 0;
    height: 70px;
    border: 1px solid var(--background-color);
    flex-basis: 25%;
  }

  .double {
    flex-basis: 50%;
  }

  .triple {
    flex-basis: 75%;
  }

  .operation {
    background-color: orange;
    color: white;
  }

  .highlight {
    background-color: red;
    color: white;
  }
</style>
