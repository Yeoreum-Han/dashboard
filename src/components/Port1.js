import port1 from "../media/port1.mp4";

const Port1 = () => {
  return (
    <div className="px-5 py-4">
      <div className="veCover">
        <div className="videoCover">
        <h5>Myblog</h5>
        <video src={port1} controls/>
        </div>
        <div className="explain">
          <ul className="ms-3">
            <li className="title">일상기록 블로그</li>
            <li>
              <span>기획의도 : </span><br/> 
              빠르게 흘러가는 일상에서 기록하고 싶은 순간들을 사진과 함께 짧은 글로 남길 수 있는 블로그입니다. 5줄 이내로 간결하게 적는 것을 권장하고, 카테고리를 나누어 글을 주제에 따라 모아보도록 했습니다.
            </li>
            <li>
              <span>제작기간 :</span>  6/19 ~ 6/30 (2주)
            </li>
            <li>
              <span>코딩 언어 :</span> HTML5, CSS3, react, Bootstrap v5.2, json-server
            </li>
            <li>
              <span>제작 프로그램 :</span> Visual Studio Code
            </li>
            <li>
              <span>react 배포 :</span> dothome Webhosting
            </li>
            <li>
              <span>json-server 배포 :</span> glitch
            </li>
            <li>
              <a href="http://yrhsummer.dothome.co.kr/" target="_blank" rel="noopener noreferrer">&gt;&gt;Myblog로 이동</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Port1;
