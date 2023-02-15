import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Servicecenter.css";

const ServiceLayout = () => {
  const { centerMenu } = useParams();
  const [onState, setOnState] = useState("faq");

  useEffect(() => {
    setOnState(centerMenu);
    // console.log(centerMenu);
  }, [centerMenu])

  return (
    <div className="container mx-auto flex my-8">
      <div className="w-64">
        <h3 className="txt_point_color text-2xl">고객센터</h3>
        <p className="text-sm mb-5">무엇을 도와드릴까요?</p>
        <ul className="sc_menu">
          <li className={`${onState === centerMenu ? "on" : ""} border border-x-0 border-b-0 border-gray-200 text-sm`}>
            <Link to="/servicecenter/faq" className="block h-full py-4 hover:bg-gray-100 pl-2.5">자주묻는질문</Link>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <Link to="/servicecenter/inquiry" className="block h-full py-4 hover:bg-gray-100 pl-2.5">1:1문의</Link>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <Link to="/servicecenter/terms" className="block h-full py-4 hover:bg-gray-100 pl-2.5">이용약관</Link>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <Link to="/servicecenter/policy" className="block h-full py-4 hover:bg-gray-100 pl-2.5">개인정보처리방침</Link>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <Link to="/servicecenter/protection" className="block h-full py-4 hover:bg-gray-100 pl-2.5">청소년보호정책</Link>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <Link to="/servicecenter/notice" className="block h-full py-4 hover:bg-gray-100 pl-2.5">공지사항</Link>
          </li>
          <li className="border border-x-0 border-gray-200 text-sm">
            <Link to="/servicecenter/alliance" className="block h-full py-4 hover:bg-gray-100 pl-2.5">제휴문의</Link>
          </li>
        </ul>
      </div>
      <div className="ml-10">Adfsdfsd</div>
    </div>
  );
}

export default ServiceLayout;