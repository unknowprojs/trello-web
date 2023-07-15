import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import { pink } from '@mui/material/colors'

function App() {
  return (
    <>
      <h1>q2kdev 1k$</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione unde voluptatibus hic sed tenetur dolorem deleniti esse id harum nesciunt sequi veritatis maiores maxime libero laboriosam, blanditiis, laudantium ad. Modi.git</p>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarmIcon sx={{ color: pink[100] }}/>
      <ThreeDRotation />
    </>
  )
}

export default App
