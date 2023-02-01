import { useState } from "react";
import { useParams } from "react-router-dom";
import { campaign } from "../mock";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [dropBtnText, setDropBtnText] = useState("+ 더보기");

  const campaignDetail = campaign.campaignList.find((c) => c.id === Number(id));

  console.log(campaignDetail);

  const onClickDrop = () => {
    setDropBtnText("- 화면접기");
  }

  return (
    <div className="container mx-auto">
      <div className="sns_badge badge-blog">
        <ul className="flex">
          {campaignDetail.snsNames.map((sns, i) => (
            <li key={i}>
              <span>{sns}</span>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="text-2xl">속초코다리냉면</h3>
      <span className="text-base mt-2.5 block text-gray-500">매콤하고~ 톡! 쏘는 맛의 코다리 냉면</span>
      <div className="mt-10 drop_down_hidden">
        <img src={campaignDetail.detailPageUrl} />
      </div>
      <button className="drop_down_btn" onClick={onClickDrop}>{dropBtnText}</button>
    </div>
  );
}

export default Detail;