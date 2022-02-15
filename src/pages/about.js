import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = {
    render() {
        return `
        ${Header.render()}
        <h1>About Page</h1>
        ${Footer.render()}`;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default AboutPage;