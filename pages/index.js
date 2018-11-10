import React from 'react';
import Head from 'next/head';
import Router ,{withRouter} from 'next/router';
import Layout from '../components/Layout'
import PostsLink from '../components/PostsLink';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
const handler = ()=>{
    console.log(Router);
   Router.push({
       pathname:'/weather',
       query:{
           name:"KLM"
       }
   });
}
Router.events.on('routeChangeStart',(url)=>{
    console.log(`Url is : ${url}`);
});
Router.events.on('routeChangeError', (err, url) => {
    if (err.cancelled) {
      console.log(`Route to ${url} was cancelled!`)
    }
  })
const Index = withRouter((props)=>(
    <div>
        <Layout>
            <Head>
                <title>
                    Search For A Series || Movie
                </title>
            </Head>
            <h1>Shows</h1>
            <p>
                NOTE : Search for a specific show in url bar => <strong>/search/your_Show_name</strong>
                <br/>
                eg : /search/batman
            </p>
            <Link href={{pathname:'/weather',query:{name:'MVPA'}}} prefetch ><a>Weather MVPA</a></Link>
            <Link href={{pathname:'/weather',query:{name:'EKM'}}} prefetch ><a>Weather EKM</a></Link>
            <Link href="/weather"><img src="/static/oneplus.png" style={{height:'20px',width:'20px'}}/></Link>
            <a onClick={handler}>Weather KLM</a>
            {props.shows.map((content)=>{
                return <PostsLink key={content.show.id} id={content.show.id} name={content.show.name} url={content.show.url}/>
            })}
        </Layout>
    </div>
));

Index.getInitialProps = async function(context) {
    
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${context.query.show}`);
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }
    
}
export default Index;