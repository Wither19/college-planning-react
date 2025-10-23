
import './App.scss'
import { useState } from 'react'
import { colleges } from './colleges'
import CollegeInfoCard from "./components/CollegeInfoCard"
// import { getRouteFromArray } from './functions'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import type { CollegeInfo } from './types'


function App() {
  const [college, setCollege] = useState<CollegeInfo>(colleges[0])
  // const [distance, setDistance] = useState(getRouteFromArray(college.coordinates).distance)
  const [isYearly, setCOAYearly] = useState(true)

  const handleCollegeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const selected = e.currentTarget.id
    const rightCollege = colleges.filter((c) => c.code === selected)[0]

    setCollege(rightCollege)
  };

  const handleCOARate = () => {
    setCOAYearly((r) => !r)
  }

  // useEffect(() => {
  //   setDistance(getRouteFromArray(college.coordinates).distance)
  // }, [college])


  return (
    <>
  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
    <div><div className="options-container">
        <FormControlLabel onChange={handleCOARate} control={<Switch />} label={`Cost of Attendance: ${isYearly ? "Yearly" : "Monthly"}`} />
      </div>
      <div className="college-card-container">
        {colleges.map((college: CollegeInfo) => <CollegeInfoCard id={college.code} college={college} isYearly={isYearly} onClick={handleCollegeChange} />)}
      </div></div>
      
      <div>{college.name}</div>
  </div>

      {/* <FormControl fullWidth>
        <InputLabel id="college-select-label">Select a College</InputLabel>
        <Select labelId="college-select-label" id="college-select" onChange={handleCollegeChange} value={college.code} label={college.name}>
          {colleges.map((c: CollegeInfo) => <MenuItem value={c.code}>{c.name}</MenuItem>)}
        </Select>
      </FormControl> */}
    </>
  )
}

export default App
