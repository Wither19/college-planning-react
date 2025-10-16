import './App.sass'
import { colleges } from "./colleges"

import { useState } from "react"
import type { CollegeInfo } from './types'

import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'
import { InputLabel, MenuItem } from '@mui/material'


function App() {
  const [college, setCollege] = useState<CollegeInfo>(colleges[0])

  const handleCollegeChange = (e: SelectChangeEvent) => {
    const selected = e.target.value
    const rightCollege = colleges.filter((c) => c.code === selected)[0]

    setCollege(rightCollege)
  };

  return (
    <>
      <div>
        {college.name}
      </div>
      <div>
        <InputLabel id="college-select-label">Select a College</InputLabel>
        <Select labelId="college-select-label" id="college-select" onChange={handleCollegeChange} value={college.code} label={college.name}>
          {colleges.map((c) => <MenuItem value={c.code}>{c.name}</MenuItem>)}
        </Select>
      </div>

      <div>
        <img className="college-icon" src={college.icon} />
      </div>
    </>
  )
}

export default App
