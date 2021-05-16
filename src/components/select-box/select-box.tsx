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

export interface State {
   selectedValue?: string;
   selectedLabel?:string;
   isShow?: boolean;
   datas?: OptionSet[]
}
export default class SelectBox extends Component<Props, State> {
   state: State = {
      selectedValue: '',
      selectedLabel: '',
      isShow: false,
      datas: [],
   };
   
   constructor(props:Props) {
      super(props);
      
      this.setState({
         selectedValue : '',
         selectedLabel: '',
         isShow: false
      })
   }

   componentDidMount() {
   }

   // componentDidUpdate(prevProps:any) {
   //    if (this.props.datas !== prevProps.datas) {
   //       this.setState((state, props) => ({
   //          datas : props.datas
   //       })
   //    );
   //    }
   //  }

   clickSelectBox() {
      this.setState((state) => ({
            isShow : !state.isShow
         })
      );
   }

   clickSelectValue(item:OptionSet) {
      if(item) {
         this.setState((state) => ({
            selectedValue: item.value,
            selectedLabel: item.label,         
            isShow: false
         }))
      };
      
   }

   render() {
      const { className, datas } = this.props;
      return (
         <div className={className != null ? 'select-box' : 'select-box ' + className}>
            <select>
               <option defaultValue="true" value="">선택</option>
               {datas && 
                datas.map((item: OptionSet, index) => {
                   return (
                     <option key={index} value={item.value}>{item.label}</option>
                   );
               })
               }
            </select>
            <div className="selected-value" onClick={this.clickSelectBox.bind(this)}>{ this.state.selectedLabel ? this.state.selectedLabel : (this.state.selectedValue ? this.state.selectedValue : '선택') }</div>
            { this.state.isShow &&
               <div className="options">
               {datas &&
                  datas.map((item: OptionSet, index) => {
                     return (
                        <div key={index} onClick={() => this.clickSelectValue(item)} className={this.state.selectedValue == item.value ? 'option selected' : 'option'} >{item.label}</div>
                     );
                  })  
                  }
               </div>
            }
      </div>
      );
   }
}