import { createSSRApp } from "vue";
import App from "./App.vue";
import { setupVant } from '@/ui/vant';

export function createApp() {
  const app = createSSRApp(App);
  setupVant(app)
  return {
    app,
  };
}
