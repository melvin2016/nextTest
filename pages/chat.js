import Layout from "../components/Layout";
export default class extends React.Component{
    static async getInitialProps(){
     return {
         name:"Melvin George"
     }   
    }
    render(){
        return (
            <Layout>
                currently mainted by : {this.props.name}<br/>
                feature being built!
            </Layout>
        );
    }
}