import React, { Component } from 'react';

export default class SelectBox extends Component {
   state = {
      selectedValues: []
   };
   
   constructor(props:any) {
      super(props);
      this.state.selectedValues = [];
   }

   render() {
      return (
         <div className="select-box">
            <select>
               <option selected value="">선택</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
            </select>
            <div className="selected-value">선택</div>
            <div className="options">
               <div className="option selected">1</div>
               <div className="option">2</div>
               <div className="option">3</div>
               <div className="option">4</div>
            </div>
      </div>
      );
   }
}