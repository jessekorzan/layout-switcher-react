import React, { Component } from 'react';
import './app.css';

import CARDS from './DATA';

const Button = (props) => (
    <button className={(props.on) ? "on" : null} onClick={() => props.handleClick(props.name)}>{props.name}</button>
)

const Block = (props) => (
    <div className="block"> 
        <div className="content" dangerouslySetInnerHTML={{__html: props.content}}></div>
    </div>
)

class App extends Component {
    constructor() {
        super();   
        this.state = {
            layout : "swimlanes"
        }  
    }
    
    // layout switcher
    handleClick = (data) => {
        this.setState({
            layout: data
        })
    }
    
    render() {
        
        let _layouts = ["swimlanes", "dashboard", "newspaper"],
            _blocks = (data = CARDS) => data.map((el, index) => <Block index={index + 1} content={el.content}/>);
        
        return (
            
            <div className={"grid " + this.state.layout}>
                <div className="block">
                    <div className="content">
                        {_layouts.map(name => <Button on={(this.state.layout === name) ? true : false} name={name} handleClick={this.handleClick} />)}
                        <p><a href="https://github.com/jessekorzan/layout-switcher-react">GitHub</a></p>
                    </div>
                </div>
                { _blocks() }
            </div>
           
        );
    }
}

export default App;
