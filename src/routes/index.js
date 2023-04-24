import { Admin, Contact } from "../components";
import { DefaultLayout } from "../components/Layout/DefaultLayout";
import { LoginLayout } from "../components/Layout/LoginLayout";
import AdminPage from "../pages/AdminPage";
import { BlogListPage } from "../pages/BlogListPage";
import { BlogPage } from "../pages/BlogPage";
import { CartPage } from "../pages/CartPage";
import { CustomerPage } from "../pages/CustomerPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { ShopPage } from "../pages/ShopPage";



export const publicRoutes = [
    { path: "/", component: HomePage, layout: DefaultLayout },
    { path: "/home", component: HomePage, layout: DefaultLayout },
    { path: "/admin", component: AdminPage, layout: DefaultLayout },
    { path: "/contact", component: Contact, layout: DefaultLayout },
    { path: "/order/:id", component: ProductPage, layout: DefaultLayout },
    { path: "/shop", component: ShopPage, layout: DefaultLayout },
    { path: '/login', component: LoginPage, layout: LoginLayout },
    { path: "/cart", component: CartPage, layout: DefaultLayout },
    { path: "/blog", component: BlogListPage, layout: DefaultLayout },
    { path: "/blog/:id", component: BlogPage, layout: DefaultLayout },
    { path: "/user", component: CustomerPage, layout: DefaultLayout }
]
