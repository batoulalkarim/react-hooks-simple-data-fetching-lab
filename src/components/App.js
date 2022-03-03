import React, { useEffect, useState } from 'react';

// create your App component here
function App() {
    const [image, setImage] = useState("")
    

useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then((data) => {
        setImage(data.message);
       
    })
}, [])

if (!image) return <p>Loading...</p>;

return <img alt="A Random Dog" src={image}/>

}

export default App