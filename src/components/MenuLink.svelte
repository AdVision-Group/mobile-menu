<script lang="ts">
  import { widen } from "../transitions/widen";
  import type { MenuLinkHoverEffect } from "../types/MenuLink";
  export let href: string;
  export let content: string;

  let contentElement: HTMLDivElement | undefined;

  export let hoverEffect: MenuLinkHoverEffect | null = null;
  let isHovered = false;
  let tailWidthPx = 10;
  const { color, effect, delay = 0, duration = 400 } = hoverEffect;
  if (effect == "underline") {
    tailWidthPx = hoverEffect.tailWidthPx ?? 10;
  }
  $: underlineWidthPx =
    contentElement?.getBoundingClientRect().width + tailWidthPx ?? 0;
</script>

<a
  {href}
  class="menuLink"
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
>
  <div class="content" bind:this={contentElement}>
    {@html content}
  </div>
  {#if effect == "underline" && isHovered}
    <div
      class="underline"
      style={`
         background-color:${color};
         width:${underlineWidthPx}px;
      `}
      transition:widen={{
        delay,
        duration,
        targetWidthPx: underlineWidthPx,
      }}
    />
  {/if}
</a>

<style lang="less">
  .menuLink {
    flex: 1;
    text-decoration: none;
    color: #000;
    margin-right: auto;
    position: relative;

    & > .content {
      width: fit-content;
    }

    & > .underline {
      position: absolute;
      bottom: -0.1rem;
      left: 0;
      height: 0.1rem;
    }
  }
</style>
