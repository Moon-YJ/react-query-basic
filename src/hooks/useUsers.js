import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
