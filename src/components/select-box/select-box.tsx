import React, { Component } from 'react';

export default class SelectBox extends Component {
   state = {
      selectValues: []
   };
   
   constructor(props:any) {
      super(props);
      this.state.selectValues = [];
   }

   render() {
      return (
      <select>
         <option selected value="">선택</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
      </select>
      );
   }
}