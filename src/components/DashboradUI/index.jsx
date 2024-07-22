import React, { Fragment } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './index.scss'
import Paper from '@mui/material/Paper';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import SupportSharpIcon from '@mui/icons-material/SupportSharp';
import AccountTreeSharpIcon from '@mui/icons-material/AccountTreeSharp';
import PunchClockSharpIcon from '@mui/icons-material/PunchClockSharp';
import Box from '@mui/material/Box';

export default function DashboardUI() {
  const [selectPeriod, setSelectPeriod] = React.useState('202407');

  const changeSelectPeriod = (event) => {

    setSelectPeriod(event.target.value);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    event.stopPropagation()
    setAge(event.target.value);
  };
  return (
    <Fragment>
      <div className="mainDrawer">
        <div className="dashboardOverview">
          <div className="dashboardTitle">Overview</div>
          <div className="dashboardPeriod">
            <Select
              value={selectPeriod}
              onChange={changeSelectPeriod}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="202407">
                <em>This Month</em>
              </MenuItem>
              <MenuItem value="202406">Last Month</MenuItem>
              <MenuItem value="202401">Six Month</MenuItem>
              <MenuItem value="202307">Last Year</MenuItem>
            </Select>
          </div>
        </div>
        <div className="dashboradMemberNumber">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent:'space-between',
              '& > :not(style)': {
                m: 1,
                width: '24%',
                height: 105,
              },
            }}
          >
            <Paper elevation={3} sx={{
              display: 'flex',
              justifyContent:'start',
              padding:'20px'
            }}>
              <div className="dashboardIcon"><PeopleAltSharpIcon/></div>
              <div className="dashboradPaperCommon">
                <div className="dashboradNumber">10,495</div>
                <div className="dashboradTitle">New Members</div>
              </div>
            </Paper>
            <Paper elevation={3} sx={{
              display: 'flex',
              justifyContent:'start',
              padding:'20px',
              alignItems: 'center'
            }}>
              <div className="dashboardIcon"><SupportSharpIcon/></div>
              <div className="dashboradPaperCommon">
                <div className="dashboradNumber">45,269</div>
                <div className="dashboradTitle">Support Members</div>
              </div>
            </Paper>
            <Paper elevation={3} sx={{
              display: 'flex',
              justifyContent:'start',
              padding:'20px'
            }}>
              <div className="dashboardIcon"><AccountTreeSharpIcon/></div>
              <div className="dashboradPaperCommon">
                <div className="dashboradNumber">20,965</div>
                <div className="dashboradTitle">Support Projects</div>
              </div>
            </Paper>
            <Paper elevation={3} sx={{
              display: 'flex',
              justifyContent:'start',
              padding:'20px'
            }}>
              <div className="dashboardIcon"><PunchClockSharpIcon/></div>
              <div className="dashboradPaperCommon">
                <div className="dashboradNumber">20,965</div>
                <div className="dashboradTitle">Timesheet Collection</div>
              </div>
            </Paper>
          </Box>
        </div>
      </div>
    </Fragment>
  )
}
