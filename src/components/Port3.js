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
              <span>기획의도 :</span> 기획의도는 시놉시스, 트리트먼트, 대본,
              콘티 등의 집필에 앞서서 제작자나 투자자들에게 해당 콘텐츠가 어떤
              내용인지를 압축적으로 보여주는 것이다.
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
            <li>홈페이지로 이동</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Port3;
