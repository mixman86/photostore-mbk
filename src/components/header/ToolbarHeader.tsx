import { useState } from 'react';
import { AppBar, Menu, MenuItem, Toolbar, IconButton } from '@mui/material';

type ToolbarHeaderProps = {
  icon: JSX.Element,
  menuOptions: string[],
}

const ToolbarHeader = ({ icon, menuOptions }: ToolbarHeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          {icon}
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {menuOptions.map((option: string) => (
            <MenuItem key={option} onClick={handleMenuClose}>{option}</MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default ToolbarHeader;
