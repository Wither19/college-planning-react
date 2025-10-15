import { StateName, StateAbbreviation } from "./enums"
import type { CollegeList } from "./types";

const colleges: CollegeList = {
  "bc": {
    name: "Broward College",
    city: "Coconut Creek",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "private",
    coordinates: [26.2517, 80.1789],
    costOfAttendance: {
      tuition: 1415,
      housingFood: 3861,
      supplies: 1502,
      personalTransportation: 4075
    },
    scholarshipAmount: 1675,
  },
  "fpu": {
    name: "Florida Polytechnic University",
    city: "Lakeland",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "public",
    coordinates: [28.0421, 81.9535],
    costOfAttendance: {
      tuition: 4940,
      housingFood: 15011,
      supplies: 858,
      personalTransportation: 4174
    },
    scholarshipAmount: 4940,
  },
  "pba": {
    name: "Palm Beach Atlantic University",
    city: "West Palm Beach",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "private",
    coordinates: [26.7145, 80.0549],
    costOfAttendance: {
      tuition: 45409,
      housingFood: 14470,
      supplies: 1324,
      personalTransportation: 3663
    },
    scholarshipAmount: 18000,
  },
  "ucf": {
    name: "University of Central Florida",
    city: "Orlando",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "public",
    coordinates: [28.5384, 81.3789],
    costOfAttendance: {
      tuition: 5954,
      housingFood: 13412,
    },
    scholarshipAmount: 5954,
  },
  "uf": {
    name: "University of Florida",
    city: "Gainesville",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "public",
    coordinates: [29.6520, 82.3250],
    costOfAttendance: {
      tuition: 6436,
      housingFood: 12615,
      supplies: 1235,
      personalTransportation: 3894
    },
    scholarshipAmount: 6436,
  },
  "usf": {
    name: "University of South Florida",
    city: "Tampa",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "public",
    coordinates: [27.9517, 82.4588],
    costOfAttendance: {
      tuition: 6410,
      housingFood: 13792,
      supplies: 780,
      personalTransportation: 5120
    },
    scholarshipAmount: 6410,
  },
  "fsu": {
    name: "Florida State University",
    city: "Tallahassee",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "public",
    coordinates: [30.4382, 84.2806],
    costOfAttendance: {
      tuition: 5654,
      housingFood: 14020,
      supplies: 1200,
      personalTransportation: 4892
    },
    scholarshipAmount: 5654,
  }
}

