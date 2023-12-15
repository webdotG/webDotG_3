import { useCurrentQuery } from "../../api/authApi";

export const Auth = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if(isLoading) {
    return <span>Загрузка</span>
  }

  return children
}