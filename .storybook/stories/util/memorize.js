import React, { Component } from "react";
import { Memorize, configuration } from "../../../src/index";
import { Input, Button } from "antd";
export default class  extends Component{

  state = {
    count: 0
  };

  render(){
    return <div>
      <Memorize id={ "test-memorize" } defaultValue={ { value: "test" } }>
        { ({ value }, sync ) => <div>
          <Input defaultValue={ value } onChange={ e => sync({
            value: e.target.value
          }) }/>
        </div> }
      </Memorize>
    </div>
  }
}