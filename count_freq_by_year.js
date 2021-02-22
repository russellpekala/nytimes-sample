const rp = require('request-promise');
fs = require('fs');

const API_KEY = 'YOUR_API_KEY';


const words = ['technology', 'science', 'politics', 'Minneapolis'];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getResultForYear(year){
    words.forEach(async (word) => {
        wordResult = await rp({
            uri: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
            qs: {
                q: word,
                'api-key': API_KEY,
                begin_date: String(year) + '0101',
                end_date: String(year) + '1231'
            },
            json: true
        });
        fs.writeFile('data/' + word + '_' + String(year), JSON.stringify(wordResult), (err) => {
            if(err){
                console.log('err on year', year);
            }
        });
    });
}


async function allYears(){
    let year = 1851;
    while(year < 1900){
        console.log('going for year', year);
        getResultForYear(year);
        await sleep(8000 * words.length);
        year += 1;
    }
}
allYears();

