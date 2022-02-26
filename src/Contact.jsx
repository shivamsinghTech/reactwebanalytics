
import React,{useEffect} from 'react';
import FarmC from './FarmC';
import ReactGA from "react-ga"
const Contact=()=>{
    useEffect(() => {
        ReactGA.initialize('UA-221131237-1');
        // To Report Page View : window.location.pathname + window.location.search
        // ReactGA.pageview("/contact");
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log(window.location.pathname + window.location.search,"path of output") 
      },[])


    return(<>
    <div className="contact">


<FarmC />
</div>

        </>
    )
}
export default Contact;