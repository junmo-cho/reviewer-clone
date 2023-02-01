import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Slider from "react-slick";
import { campaign } from "../mock";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-medium">
            <b className="txt_point_color">추천 </b> 
            캠페인
          </h3>
          <div>
            <ul className="flex flex-wrap">
              {campaign.campaignList.slice(0, 5).map((campaign, index) => (
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
                        <img src="img/txt_ico.png" />
                        <b className="txt_point_color font-medium ml-1">{campaign.apply}</b>명 신청/<b className="txt_point_color font-medium">{campaign.recruits}</b>명 모집중
                      </div>
                      <div className="flex items-center">
                        <img src="img/pen_ico.png" />
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
              {/* <li className="w-1/5 pr-4 pt-5">
                <img className="rounded-md" src="img/thumb-2009379591_HsYxZz32_sample_img48_300x300.png" />
                <div className="sns_badge badge-blog">
                  <span>블로그</span>
                </div>
                <span className="text-lg block mb-1.5">속초코다리냉면</span>
                <span className="text-xs text-gray-400">매콤하고~톡! 쏘는 맛의 코다리 냉면</span>
                <div className="flex justify-between text-xs mt-6">
                  <div className="flex items-center">
                    <img src="img/txt_ico.png" />
                    <b className="txt_point_color font-medium ml-1">1</b>명 신청/<b className="txt_point_color font-medium">30</b>명 모집중
                  </div>
                  <div className="flex items-center">
                    <img src="img/pen_ico.png" />
                    <b className="txt_point_color font-medium ml-1">0</b>개의 리뷰
                  </div>
                </div>
                <div className="badge_additional mt-3.5">
                  <ul className="flex items-center text-xs">
                    <li>방문형</li>
                    <li>D-Day 304</li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
      <section className="main_slide_wrap">
        <div className="container mx-auto">
          <Slider {...settings}>
            <div>
              <img src="img/2009379591_zhfGrTgq_2009376294_fPB8A9Rw_ECA09CEBAAA9-EC9786EC9D8C-6.png" />
            </div>
            <div>
              <img src="img/2009379591_VhuUZYXT_2009376294_I2q9QPFj_banner2.png" />
            </div>
            <div>
              <img src="img/2009379591_khKgoq83_2009376294_MnaJASEo_banner3.png" />
            </div>
            <div>
              <img src="img/2009379591_zhfGrTgq_2009376294_fPB8A9Rw_ECA09CEBAAA9-EC9786EC9D8C-6.png" />
            </div>
            <div>
              <img src="img/2009379591_VhuUZYXT_2009376294_I2q9QPFj_banner2.png" />
            </div>
            <div>
              <img src="img/2009379591_khKgoq83_2009376294_MnaJASEo_banner3.png" />
            </div>
          </Slider>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-medium">
            <b className="txt_point_color">새로운 </b> 
            캠페인
          </h3>
          <div>
            <ul className="flex flex-wrap">
              {campaign.campaignList.slice(0, 20).map((campaign, index) => (
              <li key={campaign.id} className="w-1/5 pr-4 pt-5">
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
                    <img src="img/txt_ico.png" />
                    <b className="txt_point_color font-medium ml-1">{campaign.apply}</b>명 신청/<b className="txt_point_color font-medium">{campaign.recruits}</b>명 모집중
                  </div>
                  <div className="flex items-center">
                    <img src="img/pen_ico.png" />
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
              </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;