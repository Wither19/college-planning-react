import { StateName, StateAbbreviation } from "./enums"
import type { CollegeInfo } from "./types"

/*
Icon sizes:
250
225
190
180
*/

export const colleges: CollegeInfo[] = [
  {
    code: "bc",
    name: "Broward College",
    status: "private",
    icon: "./assets/bc.png",
    city: "Coconut Creek",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    coordinates: [26.2517, 80.1789],
    costOfAttendance: {
      tuition: 1415,
      housingFood: 3861,
      supplies: 1502,
      personalTransportation: 4075
    },
    scholarshipAmount: 1675,
  },
  {
    code: "fpu",
    name: "Florida Polytechnic University",
    status: "public",
    icon: "./assets/fpu.png",
    city: "Lakeland",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    coordinates: [28.0421, 81.9535],
    costOfAttendance: {
      tuition: 4940,
      housingFood: 15011,
      supplies: 858,
      personalTransportation: 4174
    },
    scholarshipAmount: 4940,
  },
  {
    code: "pba",
    name: "Palm Beach Atlantic University",
    status: "private",
    icon: "./assets/pba.png",
    city: "West Palm Beach",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    coordinates: [26.7145, 80.0549],
    costOfAttendance: {
      tuition: 45409,
      housingFood: 14470,
      supplies: 1324,
      personalTransportation: 3663
    },
    scholarshipAmount: 18000,
  },
  {
    code: "ucf",
    name: "University of Central Florida",
    status: "public",
    icon: "./assets/ucf.png",
    city: "Orlando",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    coordinates: [28.5384, 81.3789],
    costOfAttendance: {
      tuition: 5954,
      housingFood: 13412,
    },
    scholarshipAmount: 5954,
  },
  {
    code: "uf",
    name: "University of Florida",
    status: "public",
    icon: "./assets/uf.png",
    city: "Gainesville",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    coordinates: [29.6520, 82.3250],
    costOfAttendance: {
      tuition: 6436,
      housingFood: 12615,
      supplies: 1235,
      personalTransportation: 3894
    },
    scholarshipAmount: 6436,
  },
  {
    code: "usf",
    name: "University of South Florida",
    status: "public",
    icon: "./assets/usf.png",
    city: "Tampa",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    coordinates: [27.9517, 82.4588],
    costOfAttendance: {
      tuition: 6410,
      housingFood: 13792,
      supplies: 780,
      personalTransportation: 5120
    },
    scholarshipAmount: 6410,
  },
  {
    code: "fsu",
    name: "Florida State University",
    status: "public",
    icon: "./assets/fsu.png",
    city: "Tallahassee",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    coordinates: [30.4382, 84.2806],
    costOfAttendance: {
      tuition: 5654,
      housingFood: 14020,
      supplies: 1200,
      personalTransportation: 4892
    },
    scholarshipAmount: 5654,
  }
]

