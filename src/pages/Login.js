import "./Login.css";

const Login = () => {
  return (
    <div className="container mx-auto flex justify-center items-center py-40">
      <div className="login_box">
        <ul className="flex w-full">
          <li className="flex justify-center items-center w-full">
            <img src="https://sellview.co.kr/skin/demo/img/review_on_ico.png" />
            리뷰어
          </li>
          <li className="flex justify-center items-center w-full">
            <img src="https://sellview.co.kr/skin/demo/img/cooper_off_ico.png" />
            광고주
          </li>
        </ul>
        <form>
          <div>
            <input className="w-full text-sm border border-gray-200 py-3 pl-2.5" placeholder="이메일" />
          </div>
          <div>
            <input className="w-full text-sm border border-gray-200 py-3 pl-2.5" placeholder="패스워드" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;