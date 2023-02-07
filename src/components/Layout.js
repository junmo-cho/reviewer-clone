import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div className="top-header h-9 border-solid border-b border-gray-200">
          <div className="container mx-auto h-full">
            <ul className="h-full flex justify-end items-center text-xs">
              <li className="relative py-2.5 px-3.5">커뮤니티</li>
              <li className="relative py-2.5 px-3.5">고객센터</li>
              <li className="relative py-2.5 px-3.5">로그인</li>
              <li className="relative py-2.5 px-3.5">회원가입</li>
            </ul>
          </div>
        </div>
        <div className="header-nav border-solid border-b border-gray-200">
          <div className="container mx-auto h-full flex justify-between items-center">
            <div className="left-menu flex items-center">
              <h1 className="logo">
                <Link to="/">
                  <img src="../img/logo.png" />
                </Link>
              </h1>
              <ul className="h-full flex items-center text-lg">
                <li className="relative p-2.5 ml-5 hover:text-rose-500 cursor-pointer">지역</li>
                <li className="relative p-2.5 ml-5 hover:text-rose-500 cursor-pointer">제품</li>
                <li className="relative p-2.5 ml-5 hover:text-rose-500 cursor-pointer">서비스</li>
                <li className="relative p-2.5 ml-5 hover:text-rose-500 cursor-pointer">기자단</li>
              </ul>
            </div>
            <div className="search-btn">
              <img src="../img/serch_btn.png" />
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="w-full" style={{ backgroundColor: "#373737" }}>
        <div className="border-b border-gray-300">
          <div className="container mx-auto">
            <ul className="flex text-gray-400 text-sm py-6">
              <li className="mx-2.5">회사소개</li>
              <span className="ft_line"></span>
              <li className="mx-2.5">입점/제휴문의</li>
              <span className="ft_line"></span>
              <li className="mx-2.5">이용약관</li>
              <span className="ft_line"></span>
              <li className="mx-2.5"><b className="text-white">개인정보처리방침</b></li>
              <span className="ft_line"></span>
              <li className="mx-2.5">청소년 보호정책</li>
              <span className="ft_line"></span>
            </ul>
          </div>
        </div>
        <div className="container mx-auto py-8">
          
        </div>
      </footer>
    </>
  );
}

export default Layout;