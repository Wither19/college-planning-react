import { StateName, StateAbbreviation } from "./enums"

type CollegeStatus = "public" | "private"

type COA = {
  tuition: number,
  housingFood: number,
  supplies?: number,
  personalTransportation?: number
}

export type CollegeInfo = {
  code: string,
  name: string,
  status: CollegeStatus,
  icon: string,
  city: string,
  stateName: StateName,
  stateAbbr: StateAbbreviation,
  coordinates: [number, number],
  costOfAttendance: COA,
  scholarshipAmount: number
}

