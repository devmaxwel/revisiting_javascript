import axios from 'axios'

const eventP = new Promise((resolve, reject) => {
    var name = "Ochieng"
    if(name === "Ochieng"){
        resolve(name)
    }else{
        reject(`Name was not Maxwel, name was: ${name}`)
    }
})

eventP.then((name)=> {
    console.log(name)

}).catch((err) => {
    console.log(err)

}).finally(() => {
   return;
});

// The axios method to fetch data with then and catch and finally

const data = axios.get('https://cat-fact.herokuapp.com/facts');

data.then((response)=> {
    // console.log(response.data)

}).catch((err) => {
   console.log(err)

}).finally(() => { return; });

// The async await and trycatch block

const fetchCatData = async()=> {
      try {
        const info  = await axios.get('https://cat-fact.herokuapp.com/facts')
        console.log(info.data);

      } catch (error) {
          console.log(error.response.message)
      }
}

fetchCatData();
