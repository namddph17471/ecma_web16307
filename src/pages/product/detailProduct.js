import toastr from "toastr";
import { get } from "../../api/product";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "toastr/build/toastr.min.css";
import { addToCart } from "../../utils/cart";
import { $ } from "../../utils/index";

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);

        return /* html */`
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
            <h1 class="font-bold uppercase mb-4 text-2xl">${data.name}</h1>
            <img src="${data.img}" />
            <p>${data.price}</p>
            <button
            id="btnAddToCart"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Thêm và giỏ hàng
                </button>
        </div>
        ${Footer.render()}
        `;
    },
    afterRender(id) {
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: 1 });
            toastr.success(`Thêm ${data.name} vào giỏ hàng thành công`);
        });
    },
};
export default DetailProductPage;