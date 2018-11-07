import Link from 'next/link';
export default (props)=>(
    <li>
        <Link as={`/posts/${props.id}`} href={`/posts?id=${props.id}`}>
            <a>{props.name}</a>
        </Link>
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