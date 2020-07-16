import React from 'react'
import HelloHook from './HelloHook';
import ReactDOM from 'react-dom'
import HelloClass from './HelloClass';
import HelloHookMulti from './HelloHookMulti';

const div = document.createElement("div");

describe('<HelloHook />', () => {
    it('renders without crashing', () => {        
        ReactDOM.render(<HelloHook />, div);
        ReactDOM.unmountComponentAtNode(div);
    })    
})

describe('<HelloClass />', () => {
    it('renders without crashing', () => {  
        ReactDOM.render(<HelloClass />, div);
        ReactDOM.unmountComponentAtNode(div);
    })    
})

describe('<HelloHookMulti />', () => {
    it('renders without crashing', () => {
        ReactDOM.render(<HelloHookMulti />, div);
        ReactDOM.unmountComponentAtNode(div);
    })    
})
