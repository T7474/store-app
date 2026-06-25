import React from "react";

export type PlanningStateType = {
    state1 : number
}

export type ContextPlanningType = {
    state:PlanningStateType
    setState:React.Dispatch<React.SetStateAction<PlanningStateType>>
}