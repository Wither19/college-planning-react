import type { CollegeInfo } from "../types"

import { accumulateCOA, getMonthlyCOA } from '../functions'

import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import NumberFlow from "@number-flow/react"


type CollegeInfoCardProps = {
  id: string
  college: CollegeInfo
  isYearly: boolean
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

function CollegeInfoCard({ id, college, isYearly, onClick }: CollegeInfoCardProps) {
  return (
    <Card onClick={onClick} id={id} sx={{ minWidth: 400, my: 4 }}>
      <CardContent>
        <Typography variant="h6">{college.name}</Typography>
        <Typography>Cost of Attendance: {isYearly}
          <NumberFlow
            animated={false}
            value={isYearly ? accumulateCOA(college) : getMonthlyCOA(college)}
            format={{ style: 'currency', currency: 'USD' }}
          />
          <CardMedia
            component="img"
            sx={{ width: 75, position: "relative", top: "-50%", left: "78%" }}
            image={college.icon}
            alt={college.name}
          />
          </Typography>
        <Typography variant="h5" sx={{ textAlign: "end", marginRight: "30px" }}>{college.stateAbbr}</Typography>
      </CardContent>
    </Card>
  )
}

export default CollegeInfoCard