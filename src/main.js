import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DetailNewPage from "./pages/detailNew";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import ProductPage from "./pages/products";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewPage.render(id));
    },
    "/signin": () => {
        print(Signin.render());
    },
    "signup/": () => {
        print(Signup.render());
    },
});
router.resolve();