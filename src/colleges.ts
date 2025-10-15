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
      tuition: 4940,
      housingFood: 15011,
      supplies: 858,
      personalTransportation: 4174
    },
    scholarshipAmount: 4940,
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
      tuition: 4940,
      housingFood: 15011,
      supplies: 858,
      personalTransportation: 4174
    },
    scholarshipAmount: 4940,
  },
  "ucf": {
    name: "University of Central Florida",
    city: "Orlando",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "public",
    coordinates: [28.5384, 81.3789],
    costOfAttendance: {
      tuition: 4940,
      housingFood: 15011,
      supplies: 858,
      personalTransportation: 4174
    },
    scholarshipAmount: 4940,
  },
  "uf": {
    name: "University of Florida",
    city: "Gainesville",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "public",
    coordinates: [29.6520, 82.3250],
    costOfAttendance: {
      tuition: 4940,
      housingFood: 15011,
      supplies: 858,
      personalTransportation: 4174
    },
    scholarshipAmount: 4940,
  },
  "usf": {
    name: "University of South Florida",
    city: "Tampa",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "public",
    coordinates: [27.9517, 82.4588],
    costOfAttendance: {
      tuition: 4940,
      housingFood: 15011,
      supplies: 858,
      personalTransportation: 4174
    },
    scholarshipAmount: 4940,
  },
  "fsu": {
    name: "Florida State University",
    city: "Tallahassee",
    stateName: StateName.FLORIDA,
    stateAbbr: StateAbbreviation.FL,
    status: "public",
    coordinates: [30.4382, 84.2806],
    costOfAttendance: {
      tuition: 4940,
      housingFood: 15011,
      supplies: 858,
      personalTransportation: 4174
    },
    scholarshipAmount: 4940,
  }
}

