import { createSSRApp } from "vue";
import App from "./App.vue";
import { setupStore } from '@/store';
import { setupVant } from '@/ui/vant';

export function createApp() {
  const app = createSSRApp(App);
  setupStore(app)
  setupVant(app)
  return {
    app,
  };
}
