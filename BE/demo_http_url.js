
const http = require('http');
const url = require('url');
const cors = require('cors')
const {parse} =require('querystring')
var events = [
    {
        date: new Date('August 4, 2023 20:00:00'),
        plase: 'VDNH park',
        theme: 'Travels',
        level: 'A'
    }, {
        date: new Date('August 6, 2023 19:30:00'),
        plase: 'VDNH park',
        theme: 'Artworks',
        level: 'A'
    }, {
        date: new Date('August 9, 2023 13:30:00'),
        plase: 'VDNH park',
        theme: 'Ordering in a restaurant, cafe, hotel, etc',
        level: 'A'
    }, {
        date: new Date('August 10, 2023 17:00:00'),
        plase: 'VDNH park',
        theme: 'Family and friends',
        level: 'A'
    }, {
        date: new Date('August 13, 2023 20:00:00'),
        plase: 'VDNH park',
        theme: 'Travels',
        level: 'A'
    },{
        date: new Date('August 13, 2023 19:30:00'),
        plase: 'VDNH park',
        theme: 'Artworks',
        level: 'A'
    },{
        date: new Date('August 20, 2023 13:30:00'),
        plase: 'VDNH park',
        theme: 'Ordering in a restaurant, cafe, hotel, etc',
        level: 'A'
    },{
        date: new Date('August 24, 2023 17:00:00'),
        plase: 'VDNH park',
        theme: 'Family and friends',
        level: 'A'
    }, {
        date: new Date('September 4, 2023 20:00:00'),
        plase: 'VDNH park',
        theme: 'Travels',
        level: 'A'
    },{
        date: new Date('September 14, 2023 17:00:00'),
        plase: 'VDNH park',
        theme: 'Family and friends',
        level: 'A'
    },{
        date: new Date('September 23, 2023 19:30:00'),
        plase: 'VDNH park',
        theme: 'Artworks',
        level: 'A'
    },{
        date: new Date('october 3, 2023 19:30:00'),
        plase: 'VDNH park',
        theme: 'Artworks',
        level: 'A'
    },{
        date: new Date('october 15, 2023 19:30:00'),
        plase: 'VDNH park',
        theme: 'Artworks',
        level: 'A'
    },{
        date: new Date('october 23, 2023 19:30:00'),
        plase: 'VDNH park',
        theme: 'Artworks',
        level: 'A'
    }
]
var VDNH = [
    'https://kyivpastfuture.com.ua/wp-content/uploads/2021/05/vdng-800x445.jpeg',
    'https://relax.com.ua/wp-content/media/kiew/2016/02/vdnh-kiev.jpg',
    'https://fakty.com.ua/wp-content/uploads/2021/05/28/VDNG.jpg',
    'https://roomroom.com.ua/wp-content/uploads/snimok-jekrana-2020-06-30-v-15.38.19.png'
]
var shevchenka = [
    'https://chudokiev.com/wp-content/uploads/2018/10/park_shevchenko_2.jpg',
    'https://f.kyivmaps.com/photo/3999/uC0gT.jpg',
    'https://chudokiev.com/wp-content/uploads/2018/10/park_shevchenko_11.jpg',
    'https://images.md-ukraine.com/park_shevtschenko/opt/1Qypchak_wikim1.jpg',
    'https://iftravel.com.ua/assets/gallery/84/44271255_2009718069051265_8408840688988323840_o_crop.jpg'
]

var kpi = [
    'https://kor.ill.in.ua/m/1200x0/2279377.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5c/%D0%9F%D0%B0%D1%80%D0%BA_%D0%9A%D0%9F%D0%86%2C_%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%27%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C_%D0%BF%D1%80._%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%BE%D0%B3%D0%B8_02.JPG',
    'https://weloveua.com/wp-content/uploads/2015/07/30589439.jpg',
    'https://periscope.com.ua/sites/default/files/1/dazest/Park-KPI/park-kpi-03.jpg',
    'https://kiev-foto.info/images/vuzy/kpi/park/park_kpi_03.webp'
]

var pheophany = [
    'https://mesta.com.ua/wp-content/uploads/2021/12/park-feofanija-v-kieve_4.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/%D0%A4%D0%B5%D0%BE%D1%84%D0%B0%D0%BD%D1%96%D1%8F_%D0%B2%D0%BE%D1%81%D0%B5%D0%BD%D0%B8.JPG/1200px-%D0%A4%D0%B5%D0%BE%D1%84%D0%B0%D0%BD%D1%96%D1%8F_%D0%B2%D0%BE%D1%81%D0%B5%D0%BD%D0%B8.JPG',
    'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Feofaniya-garden-in-Kyiv.jpg',
    'https://img.hotels24.ua/photos/ria/news_content/110/11044/1104436/1104436.jpg',
    'https://vechirniy.kyiv.ua/data/content/%D0%B3%D0%BE%D0%BB%D0%BE%D1%81%D0%B5%D0%B5%D0%B2%D0%BE/5d3a9c6a74e3e.jpg'
    
]
let user = [0, 1, 3, 5, 6, 7, 10]
function getNow() {
    let now = new Date().getTime()
    let count = 0
    while (now > events[count].date.getTime()) {
        count++
    }
    console.log('count = '+count)
    return count
 }


http.createServer(function (req, res) {
    cors()(req, res, () => {
        /*const headers = {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, DELETE',
            'Access-Control-Request-Headers': 'Content-Type, Origin',
            'Access-Control-Max-Age': 2592000,
        };*/
        console.log(req.method)

        if (req.method === 'OPTIONS') {
            res.writeHead(204, headers);
            console.log('THIS IS OPTIONS')
            res.end();
            return;
      
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        console.log('server work')
        if (req.method == 'GET') {
            urlRequest = url.parse(req.url, true)
            if (urlRequest.query.event == 'all') {

                res.end(JSON.stringify(events))
            }
            if (urlRequest.query.event == 'history') {
                let event = []
                let now = getNow()
                let count = 0
            
                while ((user[count] <= now) && (count < user.length)) {
                    event.push(events[user[count]])
                    count++
                }
                if (event.length > 0) {
                    res.end(JSON.stringify(event))
                } else {
                    res.end("You have no events that have happened")
                }
            
            }
            if (urlRequest.query.event == 'next_user') {
                let event = [],
                    now = getNow(),
                    count = user.length - 1
            
                console.log('count=' + count + '; now=' + now)
            
                while (user[count] >= now) {
                    event.unshift(events[user[count]])
                    count--
                    console.log('new count=' + count)
                }
            
                console.log(event)
                if (event.length > 0) {
                    res.end(JSON.stringify(event))
                } else {
                    res.end("You are not registered for future events")
                }
            }
            if (urlRequest.query.event == 'next') {
                let event = [],
                    now = getNow(),
                    count = 0,
                    number = urlRequest.query.number

                while ((count + now < events.length) && (count <= number)) {
                    event.push(events[count + now])
                    count++
                }
                console.log(event)
                if (event.length > 0) {
                    res.end(JSON.stringify(event))
                } else {
                    res.end("We haven't nex events, please, create it")
                }
            }
            if (urlRequest.query.event == 'calendar') {
                let event = [],
                    count = 0,
                    month = urlRequest.query.month - 1

                while ((count < events.length) && (events[count].date.getMonth() != month)) {
                    count++
                }
            
                while ((count < events.length) && (events[count].date.getMonth() == month)) {
                    event.push(events[count])
                    count++
                }
                
                if (event.length > 0) {
                    res.end(JSON.stringify(event))
                } else {
                    res.end("We haven't events on this month")
                }
            }
        }
        if (req.method == 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            })
            req.on('end', () => {
                let params = parse(body);
                events.push(params);
                res.write(JSON.stringify(events));
                res.end();
            })
        
        }
        if (req.method == 'DELETE') {
            urlRequest = url.parse(req.url, true)
            let index = urlRequest.query.index
            next.filter((nextEvent, pos) => pos != index)
        }
    });
 }).listen(8080)