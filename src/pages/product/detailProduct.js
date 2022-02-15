import toastr from "toastr";
import { get } from "../../api/product";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "toastr/build/toastr.min.css";
import { addToCart } from "../../utils/cart";
import { $ } from "../../utils/index";
import { reRender } from "../../utils/rerender";

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);

        return /* html */`
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
            <h1 class="font-bold uppercase mb-4 text-2xl">${data.name}</h1>
            <img src="${data.img}" />
            <p>${data.price}</p>
            <label for="about" class="block text-sm font-medium text-gray-700">
                số lượng
            </label>
            <div class="mt-1">
                <input id="quantity" type="number"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="">
            </div>
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
        const quantity = document.querySelector("#quantity");
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: quantity.value ? quantity.value : 1 }, () => {
                toastr.success(`Thêm ${data.name} vào giỏ hàng thành công`);
                reRender(DetailProductPage, "#app");
            });
        });
        Header.afterRender();
    },
};
export default DetailProductPage;