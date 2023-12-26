export default function Main() {
  return (
    <div className="Main">
      <h1>Main</h1>
      {/* react-query로 관리되지만 서버 데이터가 활용되지않는 Main 컴포넌트로 이동시 자동으로 해당 데이터는 inactive 상태가 됨, 이때부터 기본 설정된 캐시 타임이 카운트 되면서 캐시타임이 끝나면 자동으로 해당 데이터는 아예 제거됨  */}
    </div>
  );
}
