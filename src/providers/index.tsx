import { ReactNode } from "react";
import QueryProvider from "./query-provider";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>{children}</QueryProvider>
  )
};

export default AppProvider;