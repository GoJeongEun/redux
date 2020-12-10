import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';


const Home = () => {
    const [title] = useState(0);
useEffect (() => {
    document.title='Home';
});
return(
    <div>
        <p style={{fontSize:'1.5rem',fontWeight:'bold',}}>HOME</p>
    </div>
);
}



export default Home