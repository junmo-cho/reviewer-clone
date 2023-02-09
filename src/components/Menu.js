import { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../mock";

const Menu = () => {
  // const [menuOn, setMenuOn] = useState({
  //   "구매평": false,
  //   "구매평 + 리뷰": false
  // });

  // const mouseHover = (menuName, bool) => {
  //   const stateChange = { ...menuOn };
  //   stateChange[menuName] = bool;
  //   setMenuOn(stateChange)
  // };

  return (
    <>
    {menu.mainMenu.map((m, i) => (
      <li key={i} className="gnb_menu relative flex items-center p-2.5 ml-5 cursor-pointer text-center h-full">
        <Link to="/"className="hover:text-rose-500">
          {m}
        </Link>
        <div className={`gnb_sub_menu absolute left-1/2 top-16 w-full bg-white border border-gray-200 rounded py-2.5 px-6`}>
          <ul>
            {menu.subMenu.map((sm, i) => (
              <li key={i} className="text-sm text-left mb-2"><Link to="/">{sm}</Link></li>
            ))}
          </ul>
        </div>
      </li>
      // <li key={i} onMouseEnter={() => mouseHover(m, true)} onMouseLeave={() => mouseHover(m, false)} className="relative flex items-center p-2.5 ml-5 cursor-pointer text-center h-full">
      //   <Link to="/"className="gnb_menu hover:text-rose-500">
      //     {m}
      //   </Link>
      //   <div className={`gnb_sub_menu absolute left-1/2 top-16 w-full bg-white border border-gray-200 rounded py-2.5 px-6 ${menuOn[m] ? "on" : ""}`}>
      //     <ul>
      //       {menu.subMenu.map((sm, i) => (
      //         <li key={i} className="text-sm text-left mb-2"><Link to="/">{sm}</Link></li>
      //       ))}
      //     </ul>
      //   </div>
      // </li>
    ))}
    </>
  );
}

export default Menu;