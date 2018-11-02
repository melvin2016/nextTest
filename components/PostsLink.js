import Link from 'next/link';
export default (props)=>(
    <li>
        <Link as={`/posts/${props.id}`} href={`/posts?id=${props.id}`}>
            <a>{props.name}</a>
        </Link>
    </li>
);