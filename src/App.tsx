import './App.sass'
import { colleges } from "./colleges"

import { useState } from "react"
import type { CollegeInfo, CollegeKey } from './types'

import { Dropdown } from 'primereact/dropdown';


function App() {
  const [college, setCollege] = useState<CollegeInfo>(colleges[0])

  return (
    <>


      <div className="card flex justify-content-center">
        <Dropdown value={college.name} onChange={(e) => setCollege(colleges[e.value as CollegeKey])} options={colleges} optionLabel="name"
          placeholder="Select a College" className="w-full md:w-14rem" />
      </div>

      {college.name}
    </>
  )
}

export default App
