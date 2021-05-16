import React, { Component } from 'react';

export interface Option {
   readonly value:string;
   readonly label: string;
}

export const testData : readonly Option[] = [
   { value: '더 기프팅 컴퍼니', label: '더 기프팅 컴퍼니'},
   { value: '월간 가슴', label: '월간 가슴' },
   { value: '인더웨어', label: '인더웨어' },
   { value: '프론트엔드 엔지니어', label: '프론트엔드 엔지니어' }
 ];

export default class SelectBox extends Component {
   state = {
      selectedValues: null
   };
   
   constructor(props:any) {
      super(props);
      this.state.selectedValues = null;
   }

   render() {
      return (
         <div className="select-box" style={{width: 150}}>
            <select>
               <option defaultValue="true" value="">선택</option>
               {
                testData.map((item: Option, index) => {
                   return (
                     <option key={index} value={item.value}>{item.label}</option>
                   );
                })  
               }
            </select>
            <div className="selected-value">선택</div>
            <div className="options">
            {
                testData.map((item: Option, index) => {
                   return (
                     <div key={index} className={this.state.selectedValues === 'item.value' ? 'option selected' : 'option'} >{item.label}</div>
                   );
                })  
               }
            </div>
      </div>
      );
   }
}