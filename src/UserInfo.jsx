import { useUserQuery } from "./hooks/useUsers";

export default function UserInfo() {
  const { data, isSuccess } = useUserQuery();

  return (
    <div className="UserInfo">
      <h1>User Information</h1>
      {isSuccess && <p>{data.name}</p>}
    </div>
  );
}
