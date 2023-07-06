import { useState } from "react";
import Port1 from "./components/Port1";
import Port2 from "./components/Port2";
import Port3 from "./components/Port3";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: "React", component: <Port1/>},
    { name: "Node", component: <Port2/>},
    { name: "Html", component: <Port3/> },
    { name: "yrh", component: "프로필" }
  ];
  const changeTab = (e, index) => {
    e.preventDefault();
    setCurrentTab(index);
  };

  return (
    <div>
      <header className="headerCover">
        <div className="header d-flex flex-row">
        <h1>yrh</h1>
        <p>html/css/js/react</p>
        </div>
      </header>
      <div className="contents shadow ">
        <ul className="nav nav-tabs">
          {menuArr.map((el, i) => (
            <li className="menuName nav-item" key={i}>
              <div
                className={
                  i === currentTab
                    ? "nav-link active aria-current='page' cursorPointer"
                    : "nav-link cursorPointer"
                }
                onClick={(e) => changeTab(e, i)}
              >
                {el.name}
              </div>
            </li>
          ))}
        </ul>
        <div className="component">
          {menuArr[currentTab].component}
        </div>
      </div>
      <footer>
        <div>
        footer영역
        </div>
      </footer>
    </div>
  );
}

export default App;
