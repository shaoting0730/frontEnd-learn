import  React,{Component} from 'react'
// class的基本演示
class ExampleClass extends Component {
    constructor(props){
         super(props);
         this.state = {count:0}
    }
    // 组件第一次执行
    componentDidMount(){
        console.log('ExampleClass执行了')
    }
    render(){
        return ( 
            <div>
                <p>class简单使用</p>
                <p>{this.state.count}</p>
                <button onClick={()=> {this.setState({count:this.state.count+1})}}>+1</button>
                <button onClick={()=> {this.setState({count:this.state.count-1})}}>-1</button> 
            </div>
        )
    }

}
export default ExampleClass;
