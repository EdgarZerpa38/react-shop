import { Component } from "react";

const styles = {
    title:{
        textAlign: 'center',
        margin: '15px 0',
        fontSize: '32px',
        fontWeight: 'bolder'
    }
}

class Title extends Component{
    render(){
        return(
            <div>
                <p style={styles.title}>Productos</p>
            </div>
        )
    }
}

export default Title