import react from "react"
import {useState} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox({Updateinfo}){

    let[City,setCity]=useState("");
    let[err,seterr]=useState(false);

    const Api_url="https://api.openweathermap.org/data/2.5/weather";
    const Api_key="8edc7bdaab75d5ed87b8e335ec6ab284";

    let getweatherInfo=async()=>
    {
        try{
        let responce=await fetch(`${Api_url}?q=${City}&appid=${Api_key}&units=metric`)
        let jsonResponce=await responce.json();
        let result={
         City:jsonResponce.name,
         temp:jsonResponce.main.temp,
         tempMin:jsonResponce.main.temp_min,
         tempMax:jsonResponce.main.temp_max,
         humidity:jsonResponce.main.humidity,
         feelsLike:jsonResponce.main.feels_like,
         weather:jsonResponce.weather[0].description,
       };
       console.log(result);
       return result;
    }
    catch(err){
        throw err;
    }

    }
    function handlechange(e){
      setCity(e.target.value);
    }

    async function handlesub(e){
    try{
    e.preventDefault();
    console.log(City);
    setCity("");
    let newInfo= await getweatherInfo();
    Updateinfo(newInfo);
    }
    catch(err){
        seterr(true);
    }
    }
  return (
    <div className="SearchBar">
        <h2>Weather of City</h2>
        <form onSubmit={handlesub}>
              <TextField id="City" label="City Name" variant="outlined" required value={City} onChange={handlechange}/>
              <br /><br />
               <Button variant="contained" type="submit">Search</Button>
               {err && <p color="red"> No such Place exist in this API !</p>}
        </form>
    </div>
  )
}