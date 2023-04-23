import { Component } from 'react';

const styles = {
    button:{
        backgroundColor: '#000000',
        color: '#ffffff',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px'
    }
}

class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button;