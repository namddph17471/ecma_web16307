const Header = {
    render() {
        return/* html */ `
        <div class="bg-[#272f54] py-4">
          <a href="">
            <img src="https://picsum.photos/150/50" class="mx-auto" alt="" />
          </a>
        </div>
        <div  class="flex bg-[#ca7802] py-[5px]">
        <ul class="flex bg-[#ca7802]">
        <li>
          <a class="new-item" href="">Trang chủ</a>
        </li>
        <li>
          <a class="new-item" href="/about">Tuyển sinh</a>
        </li>
        <li>
          <a class="new-item" href="/product">CHương trình đào tạo</a>
        </li>
        <li>
          <a class="new-item" href="/news">Góc sinh viên</a>
        </li>
        <li>
          <a class="new-item" href="/sigin">Tuyển dụng</a>
        </li>
      </ul>
      <input class="bg-[#fff]" type="text" name="" id="" />
      <button
        class="border-2 border-[#ccc] mx-[5px] px-[10px] bg-[#272f54] text-white text-xs uppercase"
      >
        Tìm kiếm
      </button>
        </div>
            
        `;
    },
};
export default Header;