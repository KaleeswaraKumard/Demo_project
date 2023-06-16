import React, { Component } from "react";
import myjson from './json'
import './App.css'

class myApp extends Component {

  state = {
    clickedMe: [],
    changeMe: "",
    valueChange: myjson
  }



  clickMe = (jsonValue, i) => {
    if (this.state.clickedMe.includes(jsonValue)) {
      const originalData = this.state.clickedMe.filter(item => item !== jsonValue);
      this.setState({
        clickedMe: originalData
      })

    }
    else {
      this.setState({
        clickedMe: [...this.state.clickedMe, jsonValue],
      })
    }

    let filterValue = this.state.valueChange.filter((data) => data !== jsonValue)
    let updateResult = [jsonValue, ...filterValue]

    this.setState({
      valueChange: updateResult
    })
  }


  showValue = (e) => {

    const changeValue = this.state.valueChange.filter((equalValue) => {
      return (equalValue.name.toLowerCase()
        .includes(this.state.changeMe.toLowerCase()) ||
        this.state.clickedMe.includes(equalValue))
    })
    this.setState({
      changeMe: e.target.value,
      valueChange: changeValue
    })
  }

  render() {
    return (
      <div>
        <button style={{ color: "red", background: "black", border: "2px solid blue" }} onClick={() => console.log("clicked Me")}>
          Click Me
        </button>
        <div className="margin-left mt-3 mb-5" >
          <label htmlFor="Search" className="h5 mr-4">Search Country : </label>
          <input type="text" value={this.state.changeMe} onChange={this.showValue} />
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
        <h1>
          Heading1
        </h1>
        <h2>
          Heading2
        </h2>
        <h3>
          Heading3
        </h3>
        <h4>
          Heading4
        </h4>
        <h5>
          Heading5
        </h5>
        <h6>
          Heading6
        </h6>
        {/* {
          this.state.valueChange.map((jsonValue, i) => {
            return (
              <div >
                <div className="container text-dark border">
                  <div className="row">
                    <div className="col">
                      <span onClick={() => this.clickMe(jsonValue, i)}
                        className={this.state.clickedMe.includes(jsonValue) ?
                          "text-success pointer h6" : "text-primary pointer"}>
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
        } */}
      </div>
    )
  }
}

export default myApp