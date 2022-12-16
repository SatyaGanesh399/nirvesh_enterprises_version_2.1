import colors from '../../DefaultColors'
import doctor from './Assets/pic1.png';
import livetracking from './Assets/pic5.png';
import music from './Assets/pic2.png';
import cognitive from './Assets/pic3.png';
import accurate from './Assets/pic4.png';
import analysis from './Assets/pic6.png';


const leftData= [
    {
        id : "1",
        icon : "medication",
        title : '24*7 Doctor Availability',
        description : 'All time available for emergencies',
        bgColor : colors.navy,
        hover : true,
        image : doctor,
    },
    {
        id : "2",
        icon : "pending_actions",
        title : 'Live Tracking',
        description : 'Monitor Your health live',
        bgColor : 'grey',
        hover : false,
        image : livetracking,
    },
    {
        id : "3",
        icon : "headphones",
        title : 'Beneficial Interventions',
        description : 'Control your mood instantly',
        bgColor : colors.orange,
        hover : false,
        image : music,
    }
];
const rightData= [
    {
        id : "4",
        icon : 'cognition',
        title : 'Post Operative Brain Health Management',
        description : 'Worry not during post operation',
        bgColor : colors.dark,
        hover : false,
        image : cognitive,
    },
    {
        id : "5",
        icon : 'pie_chart',
        title : 'Accurate Brain Health Status',
        description : 'Accurate brain health data instantly',
        bgColor : colors.synpasilColor,
        hover : false,
        image : accurate,
    },
    {
        id : "6",
        icon : 'analytics',
        title : 'Data Collection and Continous Analysis',
        description : 'Data driven health care and continous monitoring',
        bgColor : colors.blue,
        hover : false,
        image : analysis,
    }
];

const subscriptionData =[
    {
        id:'1',
        title : 'BASIC PLAN',
        cost: '666/month',
        advantages : ["Heath Monitor", "24/7 Doctor Availability", "Monthly free check-up", "Free hardware service"],
        accesable : [1, 0, 0, 0]
    },
    {
        id:'3',
        title : 'PREMIUM PLAN',
        cost: '1222/month',
        description : 'Basic plan includes',
        advantages : ["Heath Monitor", "24/7 Doctor Availability", "Monthly free check-up", "Free hardware service"],
        accesable : [1, 1, 1, 1]
    },
    {
        id:'2',
        title : 'STANDARD PLAN',
        cost: '888/month',
        description : ' plan includes',
        advantages : ["Heath Monitor", "24/7 Doctor Availability", "Monthly free check-up", "Free hardware service"],
        accesable : [1, 1, 0, 0]
    },
   
]

export {leftData, rightData, subscriptionData};