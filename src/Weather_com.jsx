import SearchBox from './SearchBox.jsx';
import './back.css';
import InfoBox from './InfoBox.jsx';
import {useState} from "react";

export default function Weather_com(){
    const[Weather,setWeather]=useState({
         City:"",
         temp:0,
         tempMin:0,
         tempMax:0,
         humidity:0,
         feelsLike:0,
         weather:"",
        })

        let Updateinfo=(newInfo)=>{
         setWeather(newInfo);
    }
    return(
        <div className="puppies-play-regular">

        <SearchBox Updateinfo={Updateinfo}/>
        <InfoBox infoweather={Weather}/>

        </div>
    )
}