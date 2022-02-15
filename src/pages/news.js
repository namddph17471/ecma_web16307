import NewList from "../components/NewList";
import Footer from "../components/footer";
import Header from "../components/header";

const NewsPage = {
    async render() {
        return `
        ${Header.render()}
            ${await NewList.render()}
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default NewsPage;