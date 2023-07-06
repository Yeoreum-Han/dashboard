import port2 from "../media/port2.mp4";

const Port2 = () => {
  return (
    <div className="px-5 py-5">
      <h5>Mood Diary</h5>
      <div className="d-flex flex-row mt-3">
        <video src={port2} controls style={{ width: "65%" }} />
        <div className="explain ms-4">
          <ul className="ms-4">
            <li className="title fs-5">감정일기</li>
            <li>
              <span>기획의도 :</span> 기획의도는 시놉시스, 트리트먼트, 대본,
              콘티 등의 집필에 앞서서 제작자나 투자자들에게 해당 콘텐츠가 어떤
              내용인지를 압축적으로 보여주는 것이다.
            </li>
            <li>
              <span>제작기간 :</span> 5/17 ~ 5/31(2주)
            </li>
            <li>
              <span>코딩 언어 :</span> HTML5, CSS3, Node.js, Express, MySQL
            </li>
            <li>
              <span>제작 프로그램 :</span> Visual Studio Code
            </li>
            <li>
              <span>Node 배포 :</span> github, cloudtype deploy
            </li>
            <li>
              <span>MySql 배포 :</span> awsRDS
            </li>
            <li>홈페이지로 이동</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Port2;
