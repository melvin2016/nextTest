import router,{withRouter} from 'next/router';
const anchHandler = (props,e)=>{
  console.log(props,e);
  router.push({
    pathname:'/posts',
    query:{
      id:props.id
    },
    
  },`/posts/${props.id}`);
}
export default withRouter(({router,...props})=>{
  router.prefetch(`/posts?id=${props.id}`);
    return(
      <li>
          {console.log("props",props)}
          {console.log(router)}
          
          <a onClick={anchHandler.bind(this,props)}>{props.name}</a>
          
          <style jsx>{`
              h1, a {
                  font-family: "Arial";
                }
          
                ul {
                  padding: 0;
                }
          
                li {
                  list-style: none;
                  margin: 5px 0;
                }
          
                a {
                  text-decoration: none;
                  color: blue;
                }
          
                a:hover {
                  opacity: 0.6;
                }
          `}</style>
      </li>
      
    );
});