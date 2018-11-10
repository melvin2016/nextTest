import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
export default class Weather extends React.Component{
    state={
        coords:{
            lat:this.props.lat,
            lng:this.props.lng
        },
        data:null
    }
    static async getInitialProps(context){
        return {
            lat:context.query.lat,
            lng:context.query.lng,
            name:context.query.name
        }
    }
    componentDidMount(){
        console.log(this.props);
        this.buttonHandler();
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
     getWeather = async (props=null)=>{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.lat}&lon=${this.state.coords.lng}&APPID=201ac3e02df88f951e88e8f14f444511&units=metric`);
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
                            Your Location is : {this.state.data.name}<br/>
                            Temperature  : {this.state.data.main.temp}°C<br/>
                            Query  Name: {this.props.name}
                        </article>
                     :null
                 }
                <button onClick={this.buttonHandler} >Check Again</button>
            </Layout>
        );
    }
}