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
        memberNumber: {
            Sep: {
               Team1:10,
               Team2:15,
               Team3:20,
               Team4:25
            }
        },
        otherInfo:{
            uncomplate:10,
            loginMember:20,
            loginTimes:100
        },
        followNumber:{
            9:50,
            8:50,
            7:50,
            6:50,
            5:50,
            4:50,
            3:50
        }
    }
})