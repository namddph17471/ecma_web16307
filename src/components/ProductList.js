import { getAll } from "../api/product";

const ProductList = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="py-3">
            <h2 class="font-bold uppercase mb-4 text-2xl">Product</h2>
            <div class="grid grid-cols-3 gap-8">
            ${data.map((product) =>/* html */ `
                <div class="border-2 border-[#ccc] mx-auto py-[10px] px-[20px] w-full">
                    <a href="/#/products/${product.id}"><img class="h-[250px] w-full" src="${product.img}" alt="" /></a>
                    <a href="/#/products/${product.id}">
                    <h4 class="text-orange-700 font-bold py-2">
                    ${product.name}
                    </h4>
                    </a>
                    <p class="text-xs">
                    ${product.price}
                    </p>
                </div>
            `).join("")}
            </div>
        </div>
        `;
    },
};
export default ProductList;