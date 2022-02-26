import React,{useEffect} from 'react';
import ServiceComponent from './ServiceComponent';
import ReactGA from 'react-ga';

const Service=()=>{

    useEffect(() => {
        ReactGA.initialize('UA-221131237-1');
        // To Report Page View : window.location.pathname + window.location.search
        // ReactGA.pageview("/contact");
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log(window.location.pathname + window.location.search,"path of output") 
      },[])

    return(<>
    <h1>this is Service page</h1>
    <ServiceComponent />



        </>
    )

}
export default Service;