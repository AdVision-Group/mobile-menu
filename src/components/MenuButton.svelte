<script lang="ts">
  import { createEventDispatcher } from "svelte";
  let open = false;

  const dispatch = createEventDispatcher();

  function toggle() {
    open = !open;
    dispatch("toggle", { open });
  }

  export { open, toggle };
</script>

<button class="menuButton" on:click={toggle}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-menu"
  >
    <line
      x1="3"
      y1="12"
      x2="21"
      y2="12"
      style={open ? "transform: rotate(45deg) translate(6px, -12px);" : ""}
    />
    <line
      x1="3"
      y1="18"
      x2="21"
      y2="18"
      style={open ? "transform: rotate(-45deg) translate(-12px, 0px);" : ""}
    />
    <line x1="3" y1="6" x2="21" y2="6" style={open ? "opacity: 0" : ""} />
  </svg>
</button>

<style>
  .menuButton {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 100;
  }
  .menuButton > svg > line {
    transition: all 0.2s ease-in-out;
  }
</style>
