import type { CollegeInfo } from "../types"

import { accumulateCOA, getMonthlyCOA } from '../functions'

import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import NumberFlow from "@number-flow/react"


type CollegeInfoCardProps = {
  college: CollegeInfo,
  isYearly: boolean,
}

function CollegeInfoCard({ college, isYearly }: CollegeInfoCardProps) {
  return (
    <Card sx={{ minWidth: 400, my: 4 }}>
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
            sx={{ width: 75, position: "relative", top: "-75%", left: "75%" }}
            image={college.icon}
            alt={college.name}
          />
          </Typography>
        <Typography variant="h5" sx={{ textAlign: "end" }}>{college.stateAbbr}</Typography>
      </CardContent>
    </Card>
  )
}

export default CollegeInfoCard