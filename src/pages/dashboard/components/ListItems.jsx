import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import UserIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Link } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon from '@mui/icons-material/Info';
export const mainListItems = (
  <>
    <Link to="../dashboard/main"> <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="My pannel" />
    </ListItemButton></Link>
   
    <Link to="../dashboard/info"> <ListItemButton>
      <ListItemIcon>
        <NoteAltIcon />
      </ListItemIcon>
   <ListItemText primary="Bac notes" /> 
    </ListItemButton>  </Link> 
   
    <Link to="../dashboard/InfoDetails">   <ListItemButton>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Info Details" />
  
    </ListItemButton>   </Link>

    
    <Link to="../dashboard/groupe">  
    <ListItemButton>
      <ListItemIcon>
        <GroupsIcon />
      </ListItemIcon>
      <ListItemText primary="Groupe List" />
    </ListItemButton>   </Link>
    
    

    <Link to="../dashboard/iscriptionList">  
    <ListItemButton>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="inscription List" />
    </ListItemButton>    </Link>

  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      more settings 
    </ListSubheader>
    
    <Link to="../">  

    <ListItemButton>
      <ListItemIcon>
        <OtherHousesIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>    </Link>

    <Link to="../dashboard/profile">  
    <ListItemButton>
    <ListItemIcon>
    <UserIcon />
    </ListItemIcon>
    <ListItemText primary="edit profile" />
  </ListItemButton>    </Link>

  <Link to="../dashboard/logout">  
    <ListItemButton>
      <ListItemIcon>
      <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItemButton></Link>
 
  </>
);