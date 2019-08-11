import React from 'react';

const ThemeContext = React.createContext('light');

class App extends React.Component{
    render(){
        return(
            <ThemeContext.Provider value='light'>
                <Toolbar/>
            </ThemeContext.Provider>
        );
    }
}

function Toolbar(props){
    return(
        <div>
            <ThemeButton />
        </div>
    );
}

class ThemeButton extends React.Component{
    static contextType = ThemeContext;
    render(){
        return <Button theme={this.context} />;
    }
}

function Button(props){
    if(props.theme === 'light')
    {
        return <button>this is light</button>;
    }
    else{
        return <button>this is dark</button>;
    }
}

export default App;