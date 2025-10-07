import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css"
export default function InfoBox({infoweather}){
    const info=infoweather;
     let rain_url="https://t4.ftcdn.net/jpg/15/39/83/91/240_F_1539839147_e4frAaukrXQzNRVG2y4u6mmKazGXuTK6.jpg";

        let winter_url="https://t3.ftcdn.net/jpg/13/87/84/68/240_F_1387846871_5ez5iifXo5hAZOculwYMszbeseI55iMm.jpg";

        let summer_url="https://t3.ftcdn.net/jpg/15/29/71/86/240_F_1529718638_J7KAf9rES9etETxSl2gb9s5vHM07Kpnh.jpg";
        
        let initial_url="https://t3.ftcdn.net/jpg/15/41/38/14/240_F_1541381468_SymjIN2ODmugS1BguO1awseLFlLnps7v.jpg";
    return (
        <div>

      <Card sx={{ maxWidth: 280 ,
         
        // 1. Set background to transparent white (0.7 opacity)
        backgroundColor: 'rgba(255, 255, 255, 0)', 
        
        // 2. Add the Frosted Glass effect
        backdropFilter: 'blur(10px)', 
        
        // 3. Optional: More rounded corners
        borderRadius: '20px'
      }} className="cardContainer">
        

        <CardMedia
        sx={{ height: 140 }}
        image={
          info && typeof info.humidity === "number" && typeof info.temp === "number"
            ? info.humidity > 70
              ? rain_url
              : info.temp > 15
              ? summer_url
              : winter_url
            : initial_url
        }
        title="Weather image"
        component="img"
       />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {info.City}
          {info.humidity > 70 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
        <p>Temprature ={info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>The Weather can be describe as <i>{info.weather}</i> and Temprature feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}