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
              <span>기획의도 : </span> <br/> 
              건강한 마음을 가지기 위해서는 자신의 감정을 돌아보고 명확히 표현할 수 있어야 합니다. 그러나 많은 사람들은 이를 잘 모르고, 시작하기도 어려워합니다. 이 일기장은 그런 사람들을 위해 기획했습니다. 여러 감정단어를 가이드로 제시하고, 한달간의 일기를 보여주며 자신에 대한 이해와, 스트레스 해소를 도와줍니다.
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
            <li className="mt-4 pt-1">
              <a href="https://port-0-portfolio-node-7xwyjq992lljcjm1bh.sel4.cloudtype.app/" target="_blank" rel="noopener noreferrer">&gt;&gt;Mood Diary로 이동</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Port2;
