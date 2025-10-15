import { StateName, StateAbbreviation } from "./enums"

type CollegeKey =
  | "fpu"
  | "pba"
  | "ucf"
  | "uf"
  | "usf"
  | "fsu"
  | "bc";

type CollegeStatus = "public" | "private"

type COA = {
  tuition: number,
  housingFood: number,
  supplies?: number,
  personalTransportation?: number
};

export type CollegeList = Record<CollegeKey, CollegeInfo>

export type CollegeInfo = {
  name: string,
  city: string,
  status: CollegeStatus,
  stateName: StateName,
  stateAbbr: StateAbbreviation,
  coordinates: [number, number],
  costOfAttendance: COA,
  scholarshipAmount: number

}

