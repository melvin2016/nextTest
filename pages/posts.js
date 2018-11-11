import Layout from '../components/Layout';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import RHP from 'react-html-parser';
const Content = (props)=>(
    <>
        <h1>{props.name}</h1>
        <img src={props.image.medium}/>
        <p>{RHP(props.summary)}</p>
   </>
);
const Posts = (props)=>(
    <Layout>
        <Head>
            <title>
                {props.name}
            </title>
        </Head>
        <Content {...props}/>
    </Layout>
)
Posts.getInitialProps = async function(context) {
    const res = await fetch(`https://api.tvmaze.com/shows/${context.query.id}`);
    const data = await res.json();
    return data; 
};

export default Posts;
