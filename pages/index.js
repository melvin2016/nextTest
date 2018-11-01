import React from 'react';
import Layout from '../components/Layout'
import PostsLink from '../components/PostsLink';
const Index = ()=>(
    <div>
        <Layout>
            <h1>Blogs</h1>
            <PostsLink name="my-story" title="My Story"/>
            <PostsLink name="hell-my-story" title="Hell My Story"/>
            <PostsLink name="ahh-fuck-this" title="Ahh.. fuck 'this' "/>
        </Layout>
    </div>
);

export default Index;