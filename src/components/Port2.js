import port2 from "../media/port2.mp4";

const Port2 = () => {
  return (
    <div className="px-5 py-4">
      <div className="veCover">
        <div className="videoCover">
          <h5>Mood Diary</h5>
          <video src={port2} controls />
        </div>
        <div className="explain">
          <ul className="ms-3">
            <li className="title">감정일기</li>
            <li>
              <span>기획의도 : </span> <br />
              건강한 마음을 가지기 위해서는 자신의 감정을 돌아보고 명확히 표현할 수 있어야 합니다. 이 일기장은 감정표현이 어려운 사람들을 위해 기획했습니다. 여러 감정단어를 가이드로 제시하고, 한달간의 일기를 보여주며 자신에 대한 이해와, 스트레스 해소를 도와줍니다.
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
            <li>
              <a href="https://port-0-portfolio-node-7xwyjq992lljcjm1bh.sel4.cloudtype.app/" target="_blank" rel="noopener noreferrer">&gt;&gt;Mood Diary로 이동</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Port2;
