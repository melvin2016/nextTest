import Link from 'next/link';
export default (props)=>(
    <li>
        <Link as={`/posts/${props.name}`} href={`/posts?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);