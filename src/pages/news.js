import NewList from "../components/NewList";
import Footer from "../components/footer";
import Header from "../components/header";

const NewsPage = {
    render() {
        return `
        ${Header.render()}
            ${NewList.render()}
        ${Footer.render()}
        `;
    },
};
export default NewsPage;