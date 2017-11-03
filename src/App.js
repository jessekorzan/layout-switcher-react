import React, { Component } from 'react';
import './app.css';

const Button = (props) => (
    <button className={(props.on) ? "on" : null} onClick={() => props.handleClick(props.name)}>{props.name}</button>
)

const Block = (props) => (
    <div className="block"> 
        <h1>{props.index}</h1>
        <p>Conveniently revolutionize enterprise quality vectors with high standards in intellectual capital. Completely envisioneer extensive technology and timely markets. Phosfluorescently develop premium best practices whereas pandemic schemas. Dramatically incentivize resource-leveling growth strategies after progressive channels. Continually fabricate resource maximizing innovation before ethical meta-services.</p>
        <p>Credibly enable sticky initiatives with cutting-edge deliverables. Uniquely productivate clicks-and-mortar web-readiness rather than dynamic potentialities. Progressively incentivize exceptional services via world-class materials. Globally foster cross-media processes without multimedia based outsourcing. Rapidiously orchestrate.</p>
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
        
        let _layouts = ["swimlanes", "newspaper", "dashboard"],
            _blocks = (data = ["block", "block", "block", "block", "block"]) => data.map((el, index) => <Block index={index + 1}/>);
        
        return (
            
            <div className={"grid " + this.state.layout}>
                <div className="block">
                    {_layouts.map(name => <Button on={(this.state.layout === name) ? true : false} name={name} handleClick={this.handleClick} />)}
                </div>
                { _blocks() }
            </div>
           
        );
    }
}

export default App;
