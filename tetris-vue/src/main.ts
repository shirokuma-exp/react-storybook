import { createApp } from 'vue'
import App from './App.vue'

// VueRouter の利用に必要なモジュールを読み込む
import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";

// 各pages を読み込む
import TopPage from "./pages/TopPage.vue";
import PlayPage from "./pages/PlayPage.vue";

// 各画面のルーティング情報
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "TopPage",
    component: TopPage,
  },
  {
    path: "/play",
    name: "PlayPage",
    component: PlayPage,
  },
];

// 各画面のルーティング情報からルータを作成
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// use 関数を利用してルーターを使用可能にする

createApp(App).use(router).mount('#app');
