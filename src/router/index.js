import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Dashboard from "../views/Dashboard.vue";
import Detail from "../views/Detail.vue";

const routes = [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/forgot-password",
      name: "Forgot",
      component: ForgotPassword,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    }
 
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;