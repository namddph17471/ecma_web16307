import data from "../data";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailNewPage = {
    async render(id) {
        const found = data.find((element) => element.id === id);
        return `
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
            <h1 class="font-bold uppercase mb-4 text-2xl">${found.title}</h1>
            <img src="${found.img}" />
            <p>${found.desc}</p>
        </div>
        ${Footer.render()}
        `;
    },
};
export default DetailNewPage;