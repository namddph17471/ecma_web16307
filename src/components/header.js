import { reRender } from "../utils/rerender";

const Header = {
    render() {
        return/* html */ `
        <div class="bg-[#272f54] py-4">
          <a href="">
            <img src="https://picsum.photos/150/50" class="mx-auto" alt="" />
          </a>
        </div>
        <div  class="flex bg-[#ca7802] py-[5px]">
        <ul class="flex bg-[#ca7802] text-center">
        <li>
          <a class="new-item" href="/#/">Trang chủ</a>
        </li>
        <li>
          <a class="new-item" href="/#/about">Tuyển sinh</a>
        </li>
        <li>
          <a class="new-item" href="/#/product">Chương trình đào tạo</a>
        </li>
        <li>
          <a class="new-item" href="/#/news">Tin Tức</a>
        </li>
      </ul>
      <ul class="flex bg-[#ca7802] text-center py-[5px]">
        <input class="bg-[#fff]" type="text" name="" id="" />
        <button
          class="border-2 border-[#ccc] mx-[5px] px-[10px] bg-[#272f54] text-white text-xs uppercase"
        >
          Tìm kiếm
        </button>
      </ul>
      ${localStorage.getItem("user") ?/* html */ `
            <ul class="flex  items-center ">
            <li class="flex items-center">Xin chào <span id="account_username" class="block px-4 py-3 text-white"></span></li>
            <li id="logout" class="cursor-pointer">Logout</li>
          </ul>` :/* html */ `
          <ul class="flex bg-[#ca7802] text-center">
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
                localStorage.removeItem("user");
                reRender(Header, "#header");
            });
        }
    },
};
export default Header;