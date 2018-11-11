import React from 'react';
export default class Error extends React.Component{
    static getIntialProps({ res, err }){
        return{
            resStatusCode:res.statusCode,
            errStatusCode:err.statusCode
        }
    }
    render(){
        return(
            <>
                {console.log(this.props)}
                Error Occured On Our Part!
            </>
        );
    }
}