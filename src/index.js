import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// React.StrictMode는 console이 두번씩 찍힘(굳이 없어도 됨)
/*
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
*/

/*
  - redux기반으로 비동기 데이터를 전역 State 저장시 문제점
    1. redux의 태생 자체가 비동기 데이터 관리를 위한 library가 아니었기 때문에 코드 시스템이 비효율적
    2. 비동기 데이터(server side data)는 클라이언트쪽에 제어권이 없으므로 서버 데이터를 정적인 상태로 저장해서 재활용하는것 자체가 프로그래밍 관점에서 적절하지 않음
    3. 1초단위로 수시로 서버쪽에서 변경되는 데이터를 클라이언트쪽에서 전역으로 저장을 해버리면 1초만 지나도 모든 컴포넌트에 연결되어있는 비동기 데이터는 이미 적절하지 않은 예전 데이터를 활용하게 되어버리는 문제 발생
    4. 설사 전역으로 저장했다고 하더라도 비동기 데이터의 변경 요청을 했다가 다시 원래 데이터를 요청을 해도 똑같은 데이터임에도 불구하고 기존 redux 시스템에서는 해당 데이터가 같은 데이터인지 구분할 방법이 없기 때문에 똑같은 데이터를 다시 fetching해야하는 문제 발생
    
  - 요즘 전역 데이터 관리 트렌드
    1. client-side-data만 context api를 활용한 경량의 custom hook으로 전역 관리(굳이 무거운 redux 미사용)
    2. server-side-data는 굳이 전역에 저장하지 않고 서버 데이터 필요할때마다 요청, 이때 요청하는 데이터가 이전에 한번 사용한 이력이 있는 같은 데이터이면 다시 fetching요청을 하지않고 캐시에 등록되어있는 값을 재활용 (react-query, SWR)
*/
