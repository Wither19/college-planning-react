import axios from "axios"

import type { Route } from "osrm"
import type { CollegeInfo } from "./types"

const blankRoute: Route = {
  distance: 0,
  duration: 0,
  geometry: 0,
  weight: 0,
  weight_name: "",
  legs: []
}

function getRoute(lon: number, lat: number): Route {
  const OSRMURL = `http://router.project-osrm.org/route/v1/driving/26.2913,440.2411;${lon},${lat};`
  let routeData = blankRoute


  axios.get(OSRMURL).then((r) => {
    routeData = r.data
    console.log("Position 50: ", OSRMURL[49])
  })

  console.log(routeData)

  return routeData
}

export const getRouteFromArray = (arr: [number, number]): Route => getRoute(arr[0], arr[1])

export const accumulateCOA = (c: CollegeInfo): number => Object.values(c.costOfAttendance).reduce((total, current) => total + current) - c.scholarshipAmount

export const getMonthlyCOA = (c: CollegeInfo): number => (accumulateCOA(c) * (9 / 12)) / 9