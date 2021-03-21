const url_api = 'http://www.melskitchencafe.com/the-best-fudgy-brownies/';

async function apiFunc(){

    const res = await fetch(url_api){
        const data = res.json();
        console.log(res);
        console.log(data);
    }
}