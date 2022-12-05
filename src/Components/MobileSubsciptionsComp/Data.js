import colors from '../../DefaultColors'
const leftData= [
    {
        id : "1",
        title : 'Live Tracking',
        description : 'Monitor Your health live',
        bgColor : colors.navy,
    },
    {
        id : "2",
        title : 'Live Tracking',
        description : 'Monitor Your health live',
        bgColor : 'grey',
    },
    {
        id : "3",
        title : 'Live Tracking',
        description : 'Monitor Your health live',
        bgColor : colors.orange,
    }
];
const rightData= [
    {
        id : "4",
        title : 'Live Tracking',
        description : 'Monitor Your health live',
        bgColor : colors.dark,
    },
    {
        id : "5",
        title : 'Live Tracking',
        description : 'Monitor Your health live',
        bgColor : colors.synpasilColor,
    },
    {
        id : "6",
        title : 'Live Tracking',
        description : 'Monitor Your health live',
        bgColor : colors.blue,
    }
];

const subscriptionData =[
    {
        id:'1',
        title : 'BASIC',
        cost: '666/month',
        advantages : ["Heath Monitor", "24/7 Doctor Availability", "Monthly free check-up", "Free hardware service"],
        accesable : [1, 0, 0, 0]
    },
    {
        id:'3',
        title : 'PREMIUM',
        cost: '1222/month',
        description : 'Basic plan includes',
        advantages : ["Heath Monitor", "24/7 Doctor Availability", "Monthly free check-up", "Free hardware service"],
        accesable : [1, 1, 1, 1]
    },
    {
        id:'2',
        title : 'STANDARD',
        cost: '888/month',
        description : ' plan includes',
        advantages : ["Heath Monitor", "24/7 Doctor Availability", "Monthly free check-up", "Free hardware service"],
        accesable : [1, 1, 0, 0]
    },
   
]

export {leftData, rightData, subscriptionData};