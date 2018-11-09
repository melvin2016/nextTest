import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
export default class Weather extends React.Component{
    state={
        coords:{
            lat:9.9816,
            lng:76.2999
        },
        data:null
    }
    buttonHandler = ()=>{
        if(navigator && navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos)=>{
                this.setState({
                    coords:{
                        lat:pos.coords.latitude,
                        lng:pos.coords.longitude
                    }
                });
                this.getWeather();
            })
        }else{
            alert("Doesn't have Geolocation feature!")
        }
    }
     getWeather = async ()=>{
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.lat}&lon=${this.state.coords.lng}&APPID=201ac3e02df88f951e88e8f14f444511&units=metric`);
        const res = await data.json();
        this.setState({
            data:res
        })
    }
    render(){
        return (
            <Layout>
                {
                    this.state.data !== null ? 
                        <article>
                            Name : {this.state.data.name}<br/>
                            Temperature in c* : {this.state.data.main.temp} 
                        </article>
                     :null
                 }
                <button onClick={this.buttonHandler} >Check My Location's Weather</button>
            </Layout>
        );
    }
}