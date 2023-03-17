<script lang="ts">
  import { fromSide } from "./transitions/fromSide";
  import MenuButton from "./components/MenuButton.svelte";
  import MenuItem from "./components/MenuItem.svelte";
  import type { MenuItemT } from "./types/MenuItem";
  import { fade } from "svelte/transition";

  const menuItems: MenuItemT[] = [
    {
      content: "<Home>",
      href: "/",
    },
    {
      content: "Very long title to demonstrate underline",
      href: "/about",
    },
    {
      content: "Contact",
      href: "/contact",
    },
    {
      content: "Blog",
      href: "/blog",
      children: [
        {
          content: "Post 1",
          href: "/blog/post-1",
        },
        {
          content: "Post 2",
          href: "/blog/post-2",
        },
        {
          content: "Post 3",
          href: "/blog/post-3",
        },
        {
          content: "Nested posts",
          href: "/blog/nested-posts",
          children: [
            {
              content: "Nested post 1",
              href: "/blog/nested-posts/nested-post-1",
            },
            {
              content: "Nested post 2",
              href: "/blog/nested-posts/nested-post-2",
            },
            {
              content: "Nested post 3",
              href: "/blog/nested-posts/nested-post-3",
            },
          ],
        },
      ],
    },
    {
      content: "Blog",
      href: "/blog",
      children: [
        {
          content: "<ul><li>html test</li></ul>",
          href: "/blog/post-1",
        },
        {
          content: "Post 2",
          href: "/blog/post-2",
        },
        {
          content: "Post 3",
          href: "/blog/post-3",
        },
        {
          content: "Nested posts",
          href: "/blog/nested-posts",
          children: [
            {
              content: "Nested post 1",
              href: "/blog/nested-posts/nested-post-1",
            },
            {
              content: "Nested post 2",
              href: "/blog/nested-posts/nested-post-2",
            },
            {
              content: "Nested post 3",
              href: "/blog/nested-posts/nested-post-3",
              style: {
                fontSize: "1.5rem",
                fontWeight: "bold",
              },
            },
          ],
        },
      ],
    },
  ];

  let open = false;
</script>

{#if open}
  <div class="menu" transition:fromSide={{ side: "bottom" }}>
    <nav>
      {#each menuItems as item}
        <MenuItem menuItem={item} />
      {/each}
    </nav>
  </div>
{/if}
<MenuButton
  on:toggle={(event) => {
    open = event.detail.open;
  }}
/>

<style>
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    overflow-y: scroll;
  }
  nav {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
</style>
