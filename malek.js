const getJoke = async () => {
    try{
        const config = {headers: { Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return res.data.joke
    }catch(e){
        return "no avilable jokes, try later"
    }
}

const btn = document.querySelector('button');
const mainArea = document.querySelector('#areaJoke');

const addNewJoke =  async () => {
    const newLi = document.createElement('li');
    newLi.innerText = await getJoke();
    mainArea.appendChild(newLi);
}

btn.addEventListener('click', addNewJoke)