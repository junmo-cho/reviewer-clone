import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { campaign, menu } from "../mock";
import "./SubPage.css";

const SubPage = () => {
  const { category } = useParams();
  const [paramsState, setParamsState] = useState([]);

  useEffect(() => {
    const categoryFilter = campaign.campaignList.filter((c) => c.category === category);

    setParamsState(categoryFilter);
  }, [category]);

  return (
    <div className="container mx-auto">
      <div className="border-b border-gray-300 mt-8">
        <ul className="flex">
          {menu.subMenu.map((s, i) => (
            <li key={i} className="pr-5 pb-1 text-gray-500">
              <Link to={`/subpage/${s}`}>{s}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mt-12 mb-2.5">
        <h3 className="text-2xl">구매평</h3>
        <ul className="flex sns_platform">
          <li className="text-gray-500 text-sm">전체</li>
          <li className="text-gray-500 text-sm">블로그</li>
          <li className="text-gray-500 text-sm">인스타그램</li>
          <li className="text-gray-500 text-sm">쿠팡</li>
          <li className="text-gray-500 text-sm">스마트스토어</li>
          <li className="text-gray-500 text-sm">신규오픈</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-wrap">
          {paramsState ? (
            <>
              {paramsState.map((campaign, index) => (
                <li key={campaign.id} className="w-1/5 pr-4 pt-5">
                  <Link to={`/detail/${campaign.id}`}>
                    <img className="rounded-md" src={campaign.thumbnailUrl} />
                    <div className="sns_badge badge-blog">
                      <ul className="flex">
                        {campaign.snsNames.map((sns, i) => (
                          <li key={i}>
                            <span>{sns}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-lg block mb-1.5">{campaign.title}</span>
                    <span className="text-xs text-gray-400">{campaign.description}</span>
                    <div className="flex justify-between text-xs mt-6">
                      <div className="flex items-center">
                        <img src="../../img/txt_ico.png" />
                        <b className="txt_point_color font-medium ml-1">{campaign.apply}</b>명 신청/<b className="txt_point_color font-medium">{campaign.recruits}</b>명 모집중
                      </div>
                      <div className="flex items-center">
                        <img src="../../img/pen_ico.png" />
                        <b className="txt_point_color font-medium ml-1">{campaign.review}</b>개의 리뷰
                      </div>
                    </div>
                    <div className="badge_additional mt-3.5">
                      <ul className="flex items-center text-xs">
                        {campaign.optionList.map((option, i) => (
                          <li key={i}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <>
              {campaign.campaignList.slice(0, 20).map((campaign, index) => (
                <li key={campaign.id} className="w-1/5 pr-4 pt-5">
                  <Link to={`/detail/${campaign.id}`}>
                    <img className="rounded-md" src={campaign.thumbnailUrl} />
                    <div className="sns_badge badge-blog">
                      <ul className="flex">
                        {campaign.snsNames.map((sns, i) => (
                          <li key={i}>
                            <span>{sns}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-lg block mb-1.5">{campaign.title}</span>
                    <span className="text-xs text-gray-400">{campaign.description}</span>
                    <div className="flex justify-between text-xs mt-6">
                      <div className="flex items-center">
                        <img src="../../img/txt_ico.png" />
                        <b className="txt_point_color font-medium ml-1">{campaign.apply}</b>명 신청/<b className="txt_point_color font-medium">{campaign.recruits}</b>명 모집중
                      </div>
                      <div className="flex items-center">
                        <img src="../../img/pen_ico.png" />
                        <b className="txt_point_color font-medium ml-1">{campaign.review}</b>개의 리뷰
                      </div>
                    </div>
                    <div className="badge_additional mt-3.5">
                      <ul className="flex items-center text-xs">
                        {campaign.optionList.map((option, i) => (
                          <li key={i}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </li>
              ))}
            </>
          )}

        </ul>
      </div>
    </div>
  );
}

export default SubPage;