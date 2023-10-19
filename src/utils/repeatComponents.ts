import { ReactNode } from "react";

export const repeatComponents = (
  component: (i: number) => ReactNode,
  repeat: number
): ReactNode[] => {
  const components = [];

  for (let i = 1; i <= repeat; i++) {
    components.push(component(i));
  }

  return components;
};
