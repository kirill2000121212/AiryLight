async function getData(){
   try{
    const response = await fetch("http://localhost:5000/data");
    const data = await response.json();
    return data;
   }catch(e){
        console.log(e);
   }
}

getData().then(v => console.log(v))