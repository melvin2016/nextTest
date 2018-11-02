import React from 'react';
import {withRouter} from 'next/router';
import Layout from '../components/Layout'
import PostsLink from '../components/PostsLink';
import fetch from 'isomorphic-unfetch';
const Index = withRouter((props)=>(
    <div>
        <Layout>

            <h1>Shows</h1>
            <p>
                NOTE : Search for a specific show in url bar => <strong>/search/your_Show_name</strong>
                <br/>
                <pre>eg : /search/batman</pre>
            </p>

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