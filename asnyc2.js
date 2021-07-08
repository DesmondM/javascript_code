const makeRequest= (location)=>{
    return new Promise((resolve, reject)=>{
        console.log(`Making request to ${location}`)
        if(location ==='Google'){
            resolve('Google says hello')
        }else{
            reject('Can only talk to google')
        }
    })
}

const processRequest = (response)=>{
    return new Promise((resolve, reject)=>{
       // console.log('Processing response')
        resolve(`Extra information + ${response}`)
    })
}

async function doWork(){
    const response = await makeRequest('Google')
    console.log('Response received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
}

doWork();