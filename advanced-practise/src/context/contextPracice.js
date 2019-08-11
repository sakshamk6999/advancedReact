import React from 'react';

// const ThemeContext = React.createContext('light');

// class App extends React.Component{
//     render(){
//         return(
//             <ThemeContext.Provider value='light'>
//                 <Toolbar/>
//             </ThemeContext.Provider>
//         );
//     }
// }

// function Toolbar(props){
//     return(
//         <div>
//             <ThemeButton />
//         </div>
//     );
// }

// class ThemeButton extends React.Component{
//     static contextType = ThemeContext;
//     render(){
//         return <Button theme={this.context} />;
//     }
// }

function ThemedButton(props){
    if(props.theme === 'light')
    {
        return <button>this is light</button>;
    }
    else{
        return <button>this is dark</button>;
    }
}

class App extends React.Component{
    // static Button = <ThemedButton theme='light' />
    render(){
        return(
            <Toolbar>
                <ThemedButton theme='dark' />
            </Toolbar>
        );
    }
}

function Toolbar(props){
    return(
        <div>
            {props.children}
        </div>
    );
}


export default App;