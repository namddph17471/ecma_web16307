import toastr from "toastr";
import { reRender } from "../utils/rerender";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return/* html */ `
        <div class="bg-[#272f54] py-4 ">
          <a href="">
            <img src="https://picsum.photos/150/50" class="mx-auto" alt="" />
          </a>
        </div>
        <div  class="flex bg-[#ca7802] py-[5px] justify-between">
        <ul class=" bg-[#ca7802] text-center flex  items-center px-3">
        <li>
          <a class="new-item" href="/#/">Trang chủ</a>
        </li>
        <li>
          <a class="new-item" href="/#/about">Tuyển sinh</a>
        </li>
        <li>
          <a class="new-item" href="/#/products">Sản phẩm</a>
        </li>
        <li>
          <a class="new-item" href="/#/news">Tin Tức</a>
        </li>
      </ul>
      
      ${localStorage.getItem("user") ?/* html */ `
            <ul class="flex  items-center px-3">
            <li class="flex items-center ">Xin chào <span id="account_username" class="block px-4 py-3 text-white"></span></li>
            <li type="button" id="logout" class="cursor-pointer bg-red-500 rounded text-white border p-[3px]">Logout</li>
          </ul>` :/* html */ `
          <ul class="flex bg-[#ca7802]  ">
              <li>
                <a class="new-item" href="/#/signin">Đăng nhập</a>
              </li>
              <li>
                <a class="new-item" href="/#/signup">Đăng ký</a>
              </li>
          </ul>
          `}
      
    </div>
            
        `;
    },
    afterRender() {
        const accountUserName = document.querySelector("#account_username");
        if (accountUserName) {
            accountUserName.innerHTML = JSON.parse(localStorage.getItem("user")).username;
        }
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                const confirm = window.confirm("Đại hiệp có chắc chắn muốn rời khỏi ?");
                if (confirm) {
                    localStorage.removeItem("user");
                    toastr.success("Bạn đã đăng xuất thành công");
                    reRender(Header, "#header");
                }
            });
        }
    },
};
export default Header;