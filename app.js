  // const h1 = document.createElement('h1')
    // h1.innerHTML ='hello'    

    // const root = document.getElementById('root')

    // root.appendChild(h1)
    import React from 'react'
    import ReactDOM from 'react-dom'


    const h1 = React.createElement('h1',{id:'abc'},'hello');
    const h2 = React.createElement('h2',{id:'absc'},'helsdfslo hello');
    
    const div1 = React.createElement('div',{id:'abdc'},[h1,h2]);
    
    console.log(h1);
    const root = ReactDOM.createRoot(document.getElementById('root'))
    
    root.render(div1)
    
    