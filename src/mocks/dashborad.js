import Mock from "mockjs";
Mock.setup({ timeout: '1000' })
Mock.mock('/dashborad', 'get', {
    data: {
        code: 200,
        overview: {
            newMember: 1,
            supportMember: 50,
            supportProjects: 4,
            timesheetCollection:2
        },
        memberNumber: [["Month", "Team 1", "Team 2", "Team 3", "Team 4"],["Sep",10,15,20,25],["Aug",9,8,17,20],["July",9,8,17,20]],
        otherInfo:{
            uncomplate:10,
            loginMember:20,
            loginTimes:100
        },
        followNumber:[12,13,14,15,17,18,19,20,21,22,23,24]
    }
})