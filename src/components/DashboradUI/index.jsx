import React, { Fragment } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './index.scss'
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
      </div>
    </Fragment>
  )
}
