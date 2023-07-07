import port3 from "../media/port3.mp4";

const Port3 = () => {
  return (
    <div className="px-5 py-5">
      <h5>Sogong</h5>
      <div className="d-flex flex-row mt-3">
        <video src={port3} controls style={{ width: "65%" }} />
        <div className="explain ms-5">
          <ul className="ms-4">
            <li className="title fs-5">소공소공</li>
            <li>
              <span>기획의도 : </span> <br/> 
              적은 인원이거나 작은 취미를 위한 소모임 사이트를 만들기 위해 기획했습니다. 취미, 스터디, 친목으로 분류하여 사용자가 자신의 목적에 따라 모임을 찾아볼 수 있게 했습니다. 이달의 모임 페이지에서는 잘 운영되고 있는 모임을 선정하여 소개하고 홍보할 수 있도록 했습니다.
            </li>
            <li>
              <span>제작기간 :</span> 5/1 ~ 5/12 (2주)
            </li>
            <li>
              <span>코딩 언어 :</span> HTML5, CSS3,javaScript, jQuery
            </li>
            <li>
              <span>제작 프로그램 :</span> Visual Studio Code
            </li>
            <li>
              <span>배포 :</span> dothome Webhosting
            </li>
            <li className="mt-4 pt-1">
              <a href="http://yrsummer.dothome.co.kr/" target="_blank" rel="noopener noreferrer">&gt;&gt;sogong으로 이동</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Port3;
