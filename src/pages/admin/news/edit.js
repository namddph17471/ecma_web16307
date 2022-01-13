import data from "../../../data";
import Nav from "../../../components/nav";

const EditNewPage = {
    render(id) {
        const found = data.find((element) => element.id === id);
        return /* html */`
        ${Nav.render()}
            <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div class="lg:flex lg:items-center lg:justify-between">
                            <div class="flex-1 min-w-0">
                                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                    Quản lý tin tức
                                </h2>
                            </div>
                        </div>
                    </div>
            </header>
            <div class="max-w-5xl mx-auto">
                <h1 class="font-bold uppercase mb-4 text-2xl">${found.title}</h1>
                <img src="${found.img}" />
                <p>${found.desc}</p>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/news" class="sm:ml-3">
                    <button type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cập nhật
                    </button>
                </a>
            </div>
        `;
    },
};
export default EditNewPage;