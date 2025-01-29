import { AppBar, Menu, MenuItem, Toolbar } from '@mui/material';

type ToolbarHeaderProps = {
  title: string, 
  menuOptions: string[],
}

const ToolbarHeader = ({ title, menuOptions }: ToolbarHeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <div className="title">{title}</div>
        <Menu open={true}>
          {menuOptions.map((option: string) => (
            <MenuItem key={option}>{option}</MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default ToolbarHeader; 
