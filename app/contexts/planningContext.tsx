"use client";
import { createContext, useState } from "react";
import type { PlanningStateType,ContextPlanningType } from "./type";

const initPlanningState : PlanningStateType = {
  state1: 1,
};

const defaultContextValue : ContextPlanningType = {
  state: initPlanningState,
  setState: () => {},
};

const ContextPlanning = createContext(defaultContextValue);

const ContextPlanningProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState(initPlanningState);
  return (
    <ContextPlanning.Provider value={{ state, setState }}>
      {children}
    </ContextPlanning.Provider>
  );
};
export { ContextPlanning, ContextPlanningProvider };
