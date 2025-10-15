import axios from "axios";

import type { Route } from "@types/osrm";
import type { CollegeInfo } from "./types";

const blankRoute: Route = {
  distance: 0,
  duration: 0,
  geometry: 0,
  weight: 0,
  weight_name: "",
  legs: []
};

function getRoute(n: number, w: number): Route {
  let routeData = blankRoute;

  axios.get(`http://router.project-osrm.org/route/v1/driving/${n},${w}`).then((r) => {
    routeData = r.data;
  });

  return routeData;
};

function getRouteFromArray(arr: [number, number]): Route {
  return getRoute(arr[0], arr[1]);
}

function accumulateCOA(c: CollegeInfo): number {
  return Object.values(c.costOfAttendance).reduce((total, current) => total + current) - c.scholarshipAmount;
}