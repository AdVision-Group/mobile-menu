import "./app.css";
import App from "./Menu.svelte";

const app = new App({
  target: document.getElementById("app"),
  props: {
    // create p with text "xxd"
    testElement: "<p>xxd</p>",
    show: false,
  },
});

export default app;
