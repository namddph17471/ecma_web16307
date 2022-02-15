import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductList from "../../components/ProductList";

const ProductPage = {
    async render() {
        return `
        ${Header.render()}
            ${await ProductList.render()}
        ${Footer.render()}
        `;
    },
};
export default ProductPage;