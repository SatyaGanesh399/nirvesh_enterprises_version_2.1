import colors from '../../DefaultColors'
import doctor from '../../Assets/iphone-doctor.png';
import livetracking from '../../Assets/iphone-treatment.png';
import music from '../../Assets/iphone-homescreen.png';
import  center from '../../Assets/iphone-center-details.png';

const leftData= [
    {
        id : "1",
        title : '24*7 Doctor',
        description : 'All time available for emergencies',
        bgColor : colors.navy,
        hover : true,
        image : doctor,
    },
    {
        id : "2",
        title : 'Live Tracking',
        description : 'Monitor Your health live',
        bgColor : 'grey',
        hover : false,
        image : livetracking,
    },
    {
        id : "3",
        title : 'Music',
        description : 'Control your mood instantly',
        bgColor : colors.orange,
        hover : false,
        image : music,
    }
];
const rightData= [
    {
        id : "4",
        title : '24*7 Centers',
        description : 'All time available for emergencies',
        bgColor : colors.dark,
        hover : false,
        image : center,
    },
    {
        id : "5",
        title : 'Live Tracking',
        description : 'Monitor Your health live',
        bgColor : colors.synpasilColor,
        hover : false,
        image : music,
    },
    {
        id : "6",
        title : 'Music',
        description : 'Control your mood instantly',
        bgColor : colors.blue,
        hover : false,
        image : livetracking,
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