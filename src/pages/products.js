import Header from "../components/header";
import Footer from "../components/footer";

const ProductPage = {
    render() {
        return `
        ${Header.render()}
        <h1>Product Page</h1>
        ${Footer.render()}`;
    },
};
export default ProductPage;