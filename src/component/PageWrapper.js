import React from 'react';
import Navigation from '../component/Common/Navigation';

 const PageWrapper = (props) => {
    return (
     <div>
         <Navigation />
         {props.children}
     </div>
    )  
 }


export default PageWrapper;