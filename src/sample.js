import React,{Component} from "react";
import myjson from './json'
import './App.css'

class myApp extends Component{
  
  state={
    clickedMe:[],
    changeMe:"",
    value1:myjson
  }
  clickMe=(index)=>{
    this.setState({
    clickedMe:[...this.state.clickedMe,index],
    })
  }

  showValue=(e)=>{
    this.setState({
      changeMe:e.target.value
    })
  }
   render(){
    return(
         <div >
            <div className="margin-left mt-3 mb-5" >
              <label htmlFor="Search" className="h5 mr-4">Search your Country : </label>
              <input type="text" value={this.state.changeMe} onChange={this.showValue}/>
            </div>
            <div className="container" >
              <div className="row border bg-dark text-white">
                <div className="col">
                  <b className="h3">Country Name</b> 
                </div>
                <div className="col">
                  <b className="h3">Country Code </b>
                </div>
              </div>
            </div>
            {this.state.changeMe===""
              ?
              this.state.value1.map((jsonValue,index)=>{
                return(
                <div >
                  <div className="container text-dark border">
                    <div className="row">
                      <div className="col">
                        <span onClick={()=>this.clickMe(index)} 
                          className={this.state.clickedMe.includes(index)? 
                          "text-success pointer h6":"text-primary pointer"}>{jsonValue.name}
                        </span> 
                      </div>
                      <div className="col">
                        {jsonValue.code}
                      </div>
                    </div>
                  </div>
                </div>
                )
              })
              :
              this.state.value1.filter((equalValue)=>{
                return equalValue.name.toLowerCase()
                .includes(this.state.changeMe.toLowerCase())
              }).map((jsonValue)=>{
                return(
                <div>
                  <div className="container text-dark border">
                    <div className="row">
                      <div className="col">
                        <span onClick={()=>this.clickMe(jsonValue.name)} 
                          className="text-primary pointer" >{jsonValue.name}
                        </span> 
                      </div>
                      <div className="col">
                        {jsonValue.code}
                      </div>
                    </div>
                  </div>
                </div>
                )
              })
            }
         </div>
      )
   }
}

export default myApp




//sample 1

this.state.value1.map((item)=>{
  return(
    <div className="container text-dark border">
      <div className="row">
        <div className="col">
          <span className={"text-success pointer h6"}>
            <b>{item}</b>
          </span> 
        </div>
      </div>
    </div>
  )
})


//sample2

.map((jsonValue)=>{
  return(
  <div>
    <div className="container text-dark border">
      <div className="row">
        <div className="col">
          <span className="text-primary pointer" >
            <b>{jsonValue.name}</b>
          </span> 
        </div>
        <div className="col">
          <b>{jsonValue.code}</b>
        </div>
      </div>
    </div>
  </div>
  )
})



        // this.state.clickedMe.splice(this.state.clickedMe.indexOf(jsonValue),1)
        // this.setState({
        //   clickedMe:this.state.clickedMe,
        // })