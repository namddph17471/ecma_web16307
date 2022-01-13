import NewList from "../components/NewList";

const NewsPage = {
    render() {
        return `
            <h1>News Page</h1>
            ${NewList.render()}
        `;
    },
};
export default NewsPage;