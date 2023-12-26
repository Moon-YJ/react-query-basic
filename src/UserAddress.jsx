import { useUserQuery } from "./hooks/useUsers";

export default function UserAddress() {
  const { data, isSuccess } = useUserQuery();

  return (
    <div className="UserAddress">
      <h1>User Address</h1>
      {isSuccess && <p>{data.address.street}</p>}
    </div>
  );
}
