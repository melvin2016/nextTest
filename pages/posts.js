import {withRouter} from 'next/router';
import Layout from '../components/Layout';
const Content =  withRouter((props)=>(
    <>
        <h1>{props.router.query.title}</h1>
        {console.log(props)}
        <article>
            This is static !
        </article>
    </>
));
export default ()=>(
    <Layout>
        <Content/>
    </Layout>
);