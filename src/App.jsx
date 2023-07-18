import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import { pink } from '@mui/material/colors'
import theme from './theme'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme
} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <CssVarsProvider theme={theme} >
        <ModeToggle />
        <h1>q2kdev 1k$</h1>
        <p>Fe developergit</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione unde voluptatibus hic sed tenetur dolorem deleniti esse id harum nesciunt sequi veritatis maiores maxime libero laboriosam, blanditiis, laudantium ad. Modi.git</p>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <AccessAlarmIcon sx={{ color: pink[100] }}/>
        <ThreeDRotation />
      </CssVarsProvider>
    </>
  )
}

export default App
