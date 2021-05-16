import React, { Component } from 'react';

export interface OptionSet {
   value?:string;
   label?: string;
   isDisabled?: boolean;
}
export interface Props {
   datas?: OptionSet[];
   className?: string;
}
export default class SelectBox extends Component<Props> {
   state = {
      selectedValues: null
   };
   options: OptionSet[] = [];
   
   constructor(props:Props) {
      super(props);
      this.state.selectedValues = null;
   }

   componentDidMount() {
      if(this.props.datas) {
         this.props.datas?.map((item: OptionSet) => {
            this.options.push(item);
         })         
      }
   }

   render() {
      
      return (
         <div className={this.props.className != null ? 'select-box' : 'select-box ' + this.props.className}>
            <select>
               <option defaultValue="true" value="">선택</option>
               {
                this.options.map((item: OptionSet, index) => {
                   return (
                     <option key={index} value={item.value}>{item.label}</option>
                   );
                })  
               }
            </select>
            <div className="selected-value">선택</div>
            <div className="options">
            {
                this.options.map((item: OptionSet, index) => {
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