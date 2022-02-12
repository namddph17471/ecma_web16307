import Navigo from "navigo";
import AboutPage from "./pages/about";
import DashboardPage from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AddNewsPage from "./pages/admin/news/add";
import DeleteNewPage from "./pages/admin/news/delete";
import EditNewPage from "./pages/admin/news/edit";
import DetailNewPage from "./pages/detailNew";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import ProductPage from "./pages/products";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),

    "/product": () => print(ProductPage),

    "/news": () => print(NewsPage),

    "/news/:id": ({ data }) => print(DetailNewPage, data.id),
    "/signin": () => print(Signin),
    "/signup": () => print(Signup),

    "/admin/dashboard": () => print(DashboardPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AddNewsPage),
    "/admin/news/edit/:id": ({ data }) => print(EditNewPage, data.id),
    "/admin/news/delete/:id": ({ data }) => print(DeleteNewPage, data.id),

});
router.resolve();