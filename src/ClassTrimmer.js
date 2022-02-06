import React from 'react';

class ClassTrimmer extends Component {
    constructor(props) {
        super(props)

        this.state = {  
            timer:0
        }
    }

    componentDidMount(){
        this.interval=setInterval(()=>{
            this.setInterval(prevState => ({timer:prevState.timer+1}))
        },1000)
    }

    componentWillMount(){
        clearInterval(this.interval)
    }
    
    render() { 
        return ( 
            <div>
                class timer - {this.state.timer}
            </div>
         );
    }
}
 
export default ClassTrimmer;