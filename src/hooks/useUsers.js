import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return await response.json();
};

// useQuery(queryKey, fetch함수);
// queryKey: react-query로 관리할 각 비동기 데이터 구분 용도의 키
// useQuery 이용시 useState를 통한 지역 State 생성, useEffect를 통한 fetching함수 호출, useCallback을 통한 메모이제이션 처리 => 이 모든과정을 안해도 한번에 useQuery가 위의 모든 작업을 대신 처리해줌
/*
  data: 실제 반환 데이터
  isError, isSuccess: 데이터 반환 실패, 성공 여부
  isLoading: pending 유무
  isStale: 최신 데이터 유무 (false이면 최신 상태, true이면 옛날 상태) <-> isFresh
  refetch: 비동기 데이터 강제 재요청 함수
*/
export const useUserQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
  });
};

/*
  - react-query 개발툴에서 확인할 수 있는 상태값 다섯개
    1. fresh: 비동기 데이터가 현재 최신 상태 (refetching할 필요가 없는 신선한 상태)
    2. fetching: 비동기 데이터 요청중인 상태 (pending)
    3. paused: 특정 이유로 비동기 데이터 요청이 보류된 상태
    4. stale: 현재 해당 컴포넌트에서 활용되고있는 데이터가 최신 상태가 아닌 경우 (refetching이 필요한 상태)
    5. inactive: 최신 상태가 아닌 데이터를 해당 컴포넌트에서 현재 활용되고 있지 않은 상태 (일정시간 이후 해당 데이터가 삭제됨)
*/
