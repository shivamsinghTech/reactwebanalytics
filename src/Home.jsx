import React,{useEffect} from 'react';
import CommonPage from './CommonPage';
import ReactGA from 'react-ga';

const Home=()=>{
    useEffect(() => {
        ReactGA.initialize('UA-221131237-1');
        // To Report Page View : window.location.pathname + window.location.search
        // ReactGA.pageview("/contact");
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log(window.location.pathname + window.location.search,"path of output") 
      })

    return(<>
    
    <CommonPage  name="welcome to Home page"/>


        </>
    )

}
export default Home;