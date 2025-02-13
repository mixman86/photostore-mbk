import { Grid2 as Grid} from '@mui/material'
import ToolbarHeader from './ToolbarHeader'
import IconSetup from './IconSetup'

const BaseHeader = () => {

  const icon = IconSetup("../../assets/menu.png", "placeholder")
  
  return (
      <Grid container>
        <Grid size={10}>
          <div>
            <ToolbarHeader icon={icon} menuOptions={["Home", "About", "Portfolio", "Contact"]} />
          </div> 
        </Grid>
      </Grid>
  )
}

export default BaseHeader