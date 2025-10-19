import './App.scss'
import { colleges } from "./colleges"

import { useEffect, useRef, useState } from "react"
import type { CollegeInfo } from './types'

import { accumulateCOA, getRouteFromArray } from "./functions"

import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'
import { InputLabel, MenuItem, FormControl } from '@mui/material'
import NumberFlow from "@number-flow/react"


function App() {
  const [college, setCollege] = useState<CollegeInfo>(colleges[0])
  const [distance, setDistance] = useState(getRouteFromArray(college.coordinates).distance)

  const handleCollegeChange = (e: SelectChangeEvent) => {
    const selected = e.target.value
    const rightCollege = colleges.filter((c) => c.code === selected)[0]

    setCollege(rightCollege)
  };

  useEffect(() => {
    setDistance(getRouteFromArray(college.coordinates).distance)
  }, [college])


  return (
    <>
      <div>
        {college.name}
      </div>
      <FormControl fullWidth>
        <InputLabel id="college-select-label">Select a College</InputLabel>
        <Select labelId="college-select-label" id="college-select" onChange={handleCollegeChange} value={college.code} label={college.name}>
          {colleges.map((c: CollegeInfo) => <MenuItem value={c.code}>{c.name}</MenuItem>)}
        </Select>
      </FormControl>

      <div>
        <NumberFlow value={accumulateCOA(college)} format={{ style: 'currency', currency: 'USD' }}
        />
      </div>
      <div>
        {distance} Meters
      </div>
    </>
  )
}

export default App
