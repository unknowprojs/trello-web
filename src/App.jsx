import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import { pink } from '@mui/material/colors'

function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarmIcon sx={{ color: pink[100] }}/>
      <ThreeDRotation />
    </>
  )
}

export default App
