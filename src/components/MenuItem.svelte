<script lang="ts">
  import type { MenuItemT } from "../types/MenuItem";
  import arrow from "../assets/arrow-right.svg";
  import { slide } from "svelte/transition";
  import MenuLink from "./MenuLink.svelte";

  //TODO: make me configurable
  export let menuItem: MenuItemT;
  export let nested = false;

  const style = menuItem.style ?? {};
  let open = false;

  function getMenuItemStyle() {
    let styleToApply: string[] = [];

    if (nested) {
      styleToApply.push("width: 96%");
    } else {
      styleToApply.push("width: 100%");
    }

    if (style.fontSize) {
      styleToApply.push(`font-size: ${style.fontSize}`);
    }

    if (style.fontWeight) {
      styleToApply.push(`font-weight: ${style.fontWeight}`);
    }
    return `${styleToApply.join(";")}`;
  }
</script>

<div class="menuItem" style={getMenuItemStyle()}>
  {#if menuItem.children}
    <div class="menuItem__interactive">
      <MenuLink
        content={menuItem.content}
        hoverEffect={{
          color: "#000000",
          effect: "underline",
          tailWidthPx: 100,
        }}
        href={menuItem.href}
      />
      <button
        class="menuItem__interactive__showMore"
        on:click={() => (open = !open)}
        style={open ? "transform: rotate(90deg)" : ""}
      >
        <img src={arrow} alt="menuItem__showMore__icon" />
      </button>
    </div>
    {#if open}
      <div class="menuItem__submenu" transition:slide>
        {#each menuItem.children as child}
          <svelte:self menuItem={child} nested={true} />
        {/each}
      </div>
    {/if}
  {:else}
    <div class="menuItem__interactive">
      <MenuLink
        content={menuItem.content}
        hoverEffect={{ color: "#000000", effect: "underline" }}
        href={menuItem.href}
      />
    </div>
  {/if}
</div>

<style lang="less">
  .menuItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    border-bottom: 1px solid #eaeaea;
    font-size: 1.2rem;
    font-weight: 500;
    &__interactive {
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 100%;
      flex: 1;
      &__showMore {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        margin-left: 0.2rem;
        transition: transform 0.2s;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
        &__icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }

    &__submenu {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
</style>
