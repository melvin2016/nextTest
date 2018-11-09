import Link from 'next/link';
const style = {backgroundColor:'yellow',fontSize:20,margin:'4px',padding:'1px'};
export default ()=>(
    
    <div>
        <nav>
            <Link href="/"><a style={style}>Home</a></Link>
            <Link href="/about"><a style={style}>About Us</a></Link>
            <Link href="/chat"><a style={style}>Chat With Us</a></Link>
            <Link href="/weather"><a style={style}>Get Weather</a></Link>
        </nav>
    </div>
);