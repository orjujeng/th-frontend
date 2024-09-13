import React, { Fragment, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './index.scss'
import Paper from '@mui/material/Paper';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import SupportSharpIcon from '@mui/icons-material/SupportSharp';
import AccountTreeSharpIcon from '@mui/icons-material/AccountTreeSharp';
import PunchClockSharpIcon from '@mui/icons-material/PunchClockSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';
import Box from '@mui/material/Box';
import ReactEcharts from "echarts-for-react";
import { useTheme } from "@mui/material/styles";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Chart from 'react-apexcharts';
import { connect } from 'react-redux'
import { addInfoAction, clearInfoAction } from '../../redux/action/memberInfoAction'
import moment from 'moment';
import { dashboradService } from '../../services/dashborad'
import '../../mocks/dashborad'

function DashboardUI(props) {

  const theme = useTheme();
  const getDate = (minus) => {
    return moment().subtract(minus, 'months').year() + '/' + (moment().subtract(minus, 'months').month() + 1)
  }
  const [selectPeriod, setSelectPeriod] = React.useState(getDate(0));
  const [overviewList, setOverviewList] = React.useState([0, 0, 0, 0])
  const [followNumber, setFollowNumber] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  useEffect(() => {
    dashboradService({ period: selectPeriod }).then((result) => {
      if (result.data.code == 200) {
        setOverviewList([result.data.overview.newMember, result.data.overview.supportMember, result.data.overview.supportProjects, result.data.overview.timesheetCollection])
        setOtherInfo([result.data.otherInfo.uncomplate,
        result.data.otherInfo.loginMember,
        result.data.otherInfo.loginTimes])
        setMemberNumber(
          result.data.memberNumber
        )
        setFollowNumber(result.data.followNumber)
      }
    });
  }, [selectPeriod]);
  const [memberNumber, setMemberNumber] = React.useState([])
  const [otherInfo, setOtherInfo] = React.useState([0, 0, 0])
  const changeSelectPeriod = (event) => {
    setSelectPeriod(event.target.value);
  };
  const ChartOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        hollow: {
          // margin: 15,
          size: '70%',
        },
        dataLabels: {
          name: {
            fontSize: '24px',
            fontWeight: '600',
            color: 'rgb(52, 49, 76)',
            offsetY: 50,
          },
          value: {
            fontSize: '0',
            color: 'rgb(52, 49, 76)',
            offsetY: -5,
          },
        },
      },
    },
    fill: {
      colors: ['rgba(25, 118, 210, 0.85)'],
    },
    stroke: {
      lineCap: 'round',
      strokeWidth: '100%'
    },
    labels: [overviewList[1]],
  };

  const teamOption = {
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
    color: ["rgb(17,82,147)", "rgb(71,145,219)", "rgb(255,191,95)", "rgb(255,91,120)"],
    barGap: 0.1,
    barMaxWidth: "15px",
    dataset: {
      source: memberNumber
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
    series: [{
      name: "Team 1", type: "bar", itemStyle: {
        borderRadius: [10, 10, 0, 0],
      }
    }, {
      name: "Team 2", type: "bar", itemStyle: {
        borderRadius: [10, 10, 0, 0],
      }
    }, {
      name: "Team 3", type: "bar", itemStyle: {
        borderRadius: [10, 10, 0, 0],
      }
    }, {
      name: "Team 4", type: "bar", itemStyle: {
        borderRadius: [10, 10, 0, 0],
      }
    }]
  };
  const LineOption = {
    grid: { top: "10%", bottom: "10%", left: "5%", right: "5%" },
    legend: {
      itemGap: 20,
      icon: "circle",
      textStyle: {
        fontSize: 13,
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily
      }
    },
    label: {
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily
    },
    xAxis: {
      type: "category",
      data: [getDate(11), getDate(10), getDate(9), getDate(8), getDate(7), getDate(6), getDate(5), getDate(4), getDate(3), getDate(2), getDate(1), getDate(0)],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 14,
        fontFamily: "roboto",
        color: theme.palette.text.secondary
      }
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 }
      },
      axisLabel: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: "roboto" }
    },
    series: [
      // {
      //   data: [30, 40, 20, 50, 40, 80, 90],
      //   type: "line",
      //   stack: "This month",
      //   name: "This month",
      //   smooth: true,
      //   symbolSize: 4,
      //   lineStyle: { width: 4 }
      // },
      {
        data: followNumber,
        type: "line",
        stack: "Last 12 Months",
        name: "Last 12 Months",
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4 }
      }
    ]
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
              <MenuItem value={getDate(0)}>
                <em>This Month </em>
              </MenuItem>
              <MenuItem value={getDate(1)}>Last Month</MenuItem>
              <MenuItem value={getDate(6)}>Six Month</MenuItem>
              <MenuItem value={getDate(12)}>Last Year</MenuItem>
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
                <div className="dashboradNumber">{overviewList[0]}</div>
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
                <div className="dashboradNumber">{overviewList[1]}</div>
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
                <div className="dashboradNumber">{overviewList[2]}</div>
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
                <div className="dashboradNumber">{overviewList[3]}</div>
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
              <ReactEcharts style={{ height: '400px' }} option={{ ...teamOption }} />
            </div>
          </Paper>
        </div>
        <div className="dashboradDataBox">
          <div className="dashboardDataSummary">
            <div className="dashboardDataSummaryRow">
              <Paper elevation={3} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                width: '50%',
                marginRight: '20px'
              }}>
                <div className="dashboradDataSummaryIcon">
                  <PeopleAltSharpIcon />
                </div>
                <div className="dashboradNumber">
                  {overviewList[1]}
                </div>
                <div className="dashboradTitle">
                  Team Number
                </div>
              </Paper>
              <Paper elevation={3} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                width: '50%',
                // flexGrow: '1'
              }}>
                <div className="dashboradDataSummaryIcon">
                  <PunchClockSharpIcon />
                </div>
                <div className="dashboradNumber">
                  {otherInfo[0]}
                </div>
                <div className="dashboradTitle">
                  Timesheet Uncomplate
                </div>
              </Paper>
            </div>
            <div className="dashboardDataSummaryRow">
              <Paper elevation={3} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                // flexGrow: '1',
                width: '50%',
                marginRight: '20px'
              }}>
                <div className="dashboradDataSummaryIcon">
                  <EmojiPeopleSharpIcon />
                </div>
                <div className="dashboradNumber">
                  {otherInfo[1]}
                </div>
                <div className="dashboradTitle">
                  Login Member
                </div>
              </Paper>
              <Paper elevation={3} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                width: '50%',
                // flexGrow: '1'
              }}>
                <div className="dashboradDataSummaryIcon">
                  <LoginSharpIcon />
                </div>
                <div className="dashboradNumber">
                  {otherInfo[2]}
                </div>
                <div className="dashboradTitle">
                  Login Times
                </div>
              </Paper>
            </div>
          </div>
          <div className="dashboardFllowers">

            <Paper elevation={3} sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div className="dashboardFllowersTitle">Follower Statistics</div>
              <div className="dashboardFllowersChart">
                <Chart options={ChartOptions} series={[overviewList[1] / 60 * 100]} type="radialBar" height={350} className='dashboardFllowersChartComp' />
                <div className="dashboardFllowersIcon">
                  <PeopleAltSharpIcon />
                </div>
                <div className="dashboardFllowersAdj">
                  Awesome
                </div>
                <div className="dashboardFllowersDesc">
                  Close to reach 1000k folowers!
                </div>
              </div>
            </Paper>
          </div>
          <div className="dashboradChange">
            <div className="dashboradLineChart">
              <Paper elevation={3} sx={{
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}>
                <div className="dashboradLineChartTitleBox">
                  <div className="dashboradLineChartTitle">
                    <div className="dashboradLineChartTitleText">Follower Statistics</div>
                    <div className="dashboradLineChartRange">
                      <div className="dashboradLineChartNum">{followNumber[followNumber.length-1]-followNumber[followNumber.length-2]}</div>
                      <div className="dashboradLineChartPercent">
                        <ArrowDropUpIcon color="primary" />
                        <div className="dashboradLineChartPercentNum">{(followNumber[followNumber.length-1]-followNumber[followNumber.length-2]/followNumber[followNumber.length-2])+'%'}</div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboradLineChartDesc">System projects</div>
                </div>
                <div className="dashboradLineChartContext">
                  <ReactEcharts style={{ height: "400px", width: "800px" }} option={{ ...LineOption, color: [theme.palette.primary.main, theme.palette.primary.light] }} />
                </div>
              </Paper>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default connect(state => ({ memberInfo: state }),
  { addMemberInfo: addInfoAction, clearMemberInfo: clearInfoAction })(DashboardUI)