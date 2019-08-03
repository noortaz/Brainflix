import video0 from '../images/video-list-0.jpg';
import video1 from '../images/video-list-1.jpg';
import video2 from '../images/video-list-2.jpg';
import video3 from '../images/video-list-3.jpg';
import video4 from '../images/video-list-4.jpg';
import video5 from '../images/video-list-5.jpg';
import video6 from '../images/video-list-6.jpg';
import video7 from '../images/video-list-7.jpg';
import video8 from '../images/video-list-8.jpg';



const accessTime = (timestamp) => {
    let now = new Date(timestamp);

    let newDate = now.getDate();
    let newMonth = now.getMonth();
    let newYear = now.getFullYear();

    let newDay = newMonth + '/' + newDate + '/' + newYear;
    return newDay;
}



const mainVideo = {
    id: 0,
    title: 'BMX Rampage: 2018 Highlights',
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    channel: 'Red Cow',
    image: video0,
    views: '1,001,023',
    likes: '110,985',
    duration: ' ',
    video: ' ',
    timestamp: '12/18/2018',
    comments: [
        {
            name: "Micheal Lyons",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            id: "1c2747f0-2b28-401f-8b05-4f9d5dda9b80",
            likes: 0,
            timestamp: accessTime(1530744338878)
        },
        {
            name: "Gary Wong",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            id: "f6d80697-6ad0-40d9-8fa4-4777d95f7079",
            likes: 0,
            timestamp: accessTime(1530744338878)
        },
        {
            name: "Theodore Duncan",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            id: "7f7cae65-7a03-46bc-8ce3-12d450c832db",
            likes: 0,
            timestamp: accessTime(1530744138878)
        }
    ]
}


const sideVideo = [{
    id: 0,
    title: 'BMX Rampage: 2018 Highlights',
    channel: 'Red Cow',
    image: video0

},
{
    id: 1,
    title: 'Become A Travel Pro In One Easy Lesson…',
    channel: 'Scotty Cranmer',
    image: video1
}, 
{

    id: 2,
    title: 'Les Houches The Hidden Gem Of The…',
    channel: 'Scotty Cranmer',
    image: video2
}, 
{

    id: 3,
    title: 'Travel Health Useful Medical Information…',
    channel: 'Scotty Cranmer',
    image: video3
}, 
{

    id: 4,
    title: 'Cheap Airline Tickets Great Ways To Save',
    channel: 'Emily Harper',
    image: video4
}, 
{

    id: 5,
    title: 'Take A Romantic Break In A Boutique Hotel',
    channel: 'Ethan Owen',
    image: video5
}, 
{

    id: 6,
    title: 'Choose The Perfect Accommodations',
    channel: 'Lydia Perez',
    image: video6
}, 
{

    id: 7,
    title: 'Cruising Destination Ideas',
    channel: 'Timothy Austin',
    image: video7
}, 
{

    id: 8,
    title: 'Train Travel On Track For Safety',
    channel: 'Scotty Cranmer',
    image: video8
}];


export {sideVideo};
export {mainVideo};