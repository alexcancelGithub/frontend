import { ReactNode } from "react";

import classes from "@/layout/AppLayout.module.scss";

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return <div className={classes["app-layout"]}>{children}</div>;
};
