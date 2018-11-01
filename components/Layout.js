import Header from './header';
export default (props)=>(
    <>
        <Header/>
        <fieldset>
            {props.children}
        </fieldset>
    </>
);