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
import ReactEcharts from "echarts-for-react";
import { useTheme } from "@mui/material/styles";

export default function DashboardUI() {
  const [selectPeriod, setSelectPeriod] = React.useState('202407');
  const theme = useTheme();
  const changeSelectPeriod = (event) => {
    setSelectPeriod(event.target.value);
  };
  const option = {
    legend: {
      show: true,
      itemGap: 20,
      icon: "circle",
      top: 0,
      textStyle: {
        fontSize: 13,
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily
      }
    },
    tooltip: {
      trigger: 'item', // 触发方式，可以是 'item' 或 'axis'
      // formatter: '{a} <br/>{b}: {c} ({d}%)', // 自定义格式
    },
    label: {
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily
    },
    grid: { top: "10%", bottom: "10%", right: "5%" },
    color: ["rgb(17,82,147)","rgb(71,145,219)","rgb(255,191,95)","rgb(255,91,120)"],
    barGap: 0.1,
    barMaxWidth: "15px",
    dataset: {
      source: [
        ["Month", "Website", "App","1","2"],
        ["Jan", 2200, 1200,1,1],
        ["Feb", 800, 500,1,1],
        ["Mar", 700, 1350,1,1],
        ["Apr", 1500, 1250,1,1],
        ["May", 2450, 450,1,1],
        ["June", 1700, 1250,1,1]
      ]
    },
    xAxis: {
      type: "category",
      axisLine: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { fontSize: 13, fontFamily: "roboto", color: theme.palette.text.secondary }
    },
    yAxis: {
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 } },
      axisLabel: { fontSize: 13, fontFamily: "roboto", color: theme.palette.text.secondary }
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ name:"Website",type: "bar",itemStyle: {
      borderRadius: [10, 10, 0, 0],
    }}, {  name:"App",type: "bar",itemStyle: {
      borderRadius: [10, 10, 0, 0],
    }},{ name:"1",type: "bar",itemStyle: {
      borderRadius: [10, 10, 0, 0],
    }},{ name:"2",type: "bar",itemStyle: {
      borderRadius: [10, 10, 0, 0],
    } }]
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
              justifyContent: 'space-between',
              '& > :not(style)': {
                width: '24%',
                height: 105,
              },
            }}
          >
            <Paper elevation={3} sx={{
              display: 'flex',
              justifyContent: 'start',
              padding: '20px'
            }}>
              <div className="dashboardIcon"><PeopleAltSharpIcon /></div>
              <div className="dashboradPaperCommon">
                <div className="dashboradNumber">10,495</div>
                <div className="dashboradTitle">New Members</div>
              </div>
            </Paper>
            <Paper elevation={3} sx={{
              display: 'flex',
              justifyContent: 'start',
              padding: '20px',
              alignItems: 'center'
            }}>
              <div className="dashboardIcon"><SupportSharpIcon /></div>
              <div className="dashboradPaperCommon">
                <div className="dashboradNumber">45,269</div>
                <div className="dashboradTitle">Support Members</div>
              </div>
            </Paper>
            <Paper elevation={3} sx={{
              display: 'flex',
              justifyContent: 'start',
              padding: '20px'
            }}>
              <div className="dashboardIcon"><AccountTreeSharpIcon /></div>
              <div className="dashboradPaperCommon">
                <div className="dashboradNumber">20,965</div>
                <div className="dashboradTitle">Support Projects</div>
              </div>
            </Paper>
            <Paper elevation={3} sx={{
              display: 'flex',
              justifyContent: 'start',
              padding: '20px'
            }}>
              <div className="dashboardIcon"><PunchClockSharpIcon /></div>
              <div className="dashboradPaperCommon">
                <div className="dashboradNumber">20,965</div>
                <div className="dashboradTitle">Timesheet Collection</div>
              </div>
            </Paper>
          </Box>
        </div>
        <div className="dashboradMemberChartBox">
          <Paper elevation={3}>
            <div className="dashboradMemberChartTitle">
              Member Statistics
            </div>
            <div className="dashboradMemberChart">
              <ReactEcharts style={{ height: '400px' }} option={{ ...option }} />
            </div>
          </Paper>
        </div>
      </div>
    </Fragment>
  )
}
