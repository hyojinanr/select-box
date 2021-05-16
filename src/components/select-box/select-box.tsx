import React, { Component, RefObject } from 'react';

export interface OptionSet {
   value?:string;
   label?: string;
   isDisabled?: boolean;
}
export interface Props {
   datas?: OptionSet[];
   className?: string;
   inputName?:string;
}

export interface State {
   selectedValue?: string;
   selectedLabel?:string;
   isShow?: boolean;
   clickOutside?:boolean;
}
export default class SelectBox extends Component<Props, State> {
   state: State = {
      selectedValue: '',
      selectedLabel: '',
      isShow: false,
      clickOutside: true
   };

   myRef:RefObject<any> = React.createRef();
   
   constructor(props:Props) {
      super(props);

      this.handleClickOutside = this.handleClickOutside.bind(this);
      
      this.setState({
         selectedValue : '',
         selectedLabel: '',
         isShow: false,
         clickOutside: true
      })
   }

   // componentDidUpdate(prevProps:any) {
   //    if (this.props.datas !== prevProps.datas) {
   //       this.setState((state, props) => ({
   //          datas : props.datas
   //       })
   //    );
   //    }
   //  }

   componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
   }
  
   componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
   }

   handleClickOutside(event:any) {
      if (this.myRef && !this.myRef.current.contains(event.target)) {
         this.setState((state) => ({
            isShow : false,
            clickedOutside: true
         })
      ); 
      }
   };  

   clickSelectBox() {
      this.setState((state) => ({
            isShow : !state.isShow,
            clickedOutside: false
         })
      );
   }

   clickSelectValue(item:OptionSet) {
      if(item) {
         this.setState((state) => ({
            selectedValue: item.value,
            selectedLabel: item.label,         
            isShow: false
         }));
      };      
   }

   changeValue(event:any) {
      this.setState((state) => ({
         selectedValue: event.target.value,
      }));
   }

   collapse() {
      this.setState((state) => ({
         isShow: false
      }));
   }

   
   render() {
      const { className, datas, inputName } = this.props;
      return (
         <div className={className ? 'select-box ' + className : 'select-box'} ref={this.myRef}>
            <select name={inputName} onChange={e => this.changeValue(e)} value={this.state.selectedValue}>
               {datas && 
                datas.map((item: OptionSet, index) => {
                   return (
                     <option key={index} value={item.value}>{item.label}</option>
                   );
               })
               }
            </select>
            <div className={this.state.isShow ? 'selected-value focus' : 'selected-value'} onClick={this.clickSelectBox.bind(this)}>{ this.state.selectedLabel ? this.state.selectedLabel : (this.state.selectedValue ? this.state.selectedValue : '선택') }</div>
            <div className="arrow"></div>
            { this.state.isShow &&
               <div className="options">
               {datas &&
                  datas.map((item: OptionSet, index) => {
                     return (
                        <div key={index} onClick={() => this.clickSelectValue(item)} className={ this.state.selectedValue === item.value ? 'option selected' : 'option'} >{item.label}</div>
                     );
                  })  
                  }
               </div>
            }
      </div>
      );
   }
}