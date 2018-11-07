module.exports={
    exportPathMap:()=>{
        return {
            '/':{page:'/'},
            '/search/marvel':{page:'/index',query:{show:'marvel'}},
            '/search/lucifer':{page:'/index',query:{show:'lucifer'}}
        };
    }
}