import data from "../data";

const DetailNewPage = {
    render(id) {
        const found = data.find((element) => element.id === id);
        return `
        <div class="max-w-5xl mx-auto">
            <h1 class="font-bold uppercase mb-4 text-2xl">${found.title}</h1>
            <img src="${found.img}" />
            <p>${found.desc}</p>
        </div>
        `;
    },
};
export default DetailNewPage;