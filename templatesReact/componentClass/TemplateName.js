// templatesReact/componentClass/TemplateName.js

import React, { Component } from 'react'
import styles from './TemplateName.module.scss';

export class TemplateName extends Component {
    
    constructor(props){
        super(props);
        this.state = { state: 0 };
        this.someFunction = this.someFunction.bind(this);        
    };
    componentWillMount(){};
    componentDidMount(){};
    componentWillReceiveProps(){};
    ShouldComponentUpdate(){};
    componentWillUpdate(){};
    componentDidUpdate(){};
    componentWillUnmount(){};

    /**
     * Here event function with handle or on prefix
     * then getter for render 
     */

    render() {
        return (
            <div>
                
            </div>
        )
    }
    
}

export default TemplateName
