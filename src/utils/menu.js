export const allMenu = [
    {
        name: '首页',
        url: 'index',
        icon: 'home',
    }, {
        name:'编程书籍',
        url:'write',
        icon:'bars',
        children:[
            {name:"文字",url:'write'},
        ]
    },{
        name:"工具模块",
        url:'tool',
        icon:'tool',
        children:[
            { name: '富文本编辑器', url: 'editor' },
        ]
    }
];