import Mock from "mockjs";
Mock.setup({timeout:'1000'})
Mock.mock('/login','get',{
    data:{
        code:200,
        username:'orjujeng@hotmail.com'
    }
})