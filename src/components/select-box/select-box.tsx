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
   isDisabled?: boolean;
}

export interface State {
   selectedValue?: string;
   selectedLabel?:string;
   isShow?: boolean;
   clickOutside?:boolean;
   focusedValue?:string;
   focusedIndex?: string;
}
export default class SelectBox extends Component<Props, State> {
   state: State = {
      selectedValue: '',
      selectedLabel: '',
      isShow: false,
      clickOutside: true,
      focusedValue: '',
      focusedIndex: '-1',
   };

   myRef:RefObject<any> = React.createRef();
   
   constructor(props:Props) {
      super(props);

      this.handleClickOutside = this.handleClickOutside.bind(this);
      
      this.setState({
         selectedValue : '',
         selectedLabel: '',
         isShow: false,
         clickOutside: true,
         focusedValue: '',
         focusedIndex: '-1'
      })
   }
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
      if(this.props.isDisabled) return;

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

   
   onKeyPressed(event:any) {
      if(this.state.isShow) {
         switch(event.key) {
            case 'ArrowLeft':
               this.focusValue('previous')
            break;

            case 'ArrowUp':
               this.focusValue('previous')
            break;

            case 'ArrowRight':
               this.focusValue('next');
            break;     

            case 'ArrowDown':
               this.focusValue('next');
            break;

            case 'Enter':
               this.selectByKey();
            break;

            case 'Tab':
               this.setState((state) => ({
                  isShow: false,
                  clickOutside: true
               }))
            break;

            case 'Escape':
               this.setState((state) => ({
                  isShow: false,
                  clickOutside: true
               }))
            break;
         }      
      } else {
         switch(event.key) {
            case 'Tab':
            this.setState((state) => ({
               isShow: false,
               clickOutside: true
            }))
            break;

            case 'Enter':
               if(this.props.isDisabled) break;
               this.setState((state) => ({
                  isShow: true,
                  clickOutside: false
               }))

            break;

            default:
               this.setState((state) => ({
                  isShow: false,
                  clickOutside: true
               }))
            break;
         }
         
      }
    }

    focusValue(prevNext:string) {
      const maxLenth = this.props.datas ? this.props.datas.length-1 : 0;
      if(prevNext === 'previous') {
         this.setState((state) => ({
            focusedIndex: state.focusedIndex !== '-1' ? (Number(state.focusedIndex) - 1).toString() : maxLenth.toString(),
         }));
      } else {
         this.setState((state) => ({
            focusedIndex: state.focusedIndex !== maxLenth.toString() ? (Number(state.focusedIndex) + 1).toString() : '0'
         }));
      } 
    }

    selectByKey() {
      const item = this.props.datas ? this.props.datas[Number(this.state.focusedIndex)] : null;
      if(item) {
         this.setState((state) => ({
            selectedValue: item.value,
            selectedLabel: item.label,         
            isShow: false
         }));
      }
    }
   
   render() {
      const { className, datas, inputName, isDisabled } = this.props;
      return (
         <div className={className ? 'select-box ' + className : 'select-box'}
            ref={this.myRef}
            onKeyDown={this.onKeyPressed.bind(this)}
            tabIndex={0}
            >
            <select name={inputName} onChange={e => this.changeValue(e)} value={this.state.selectedValue} disabled={isDisabled}>
               <option value="">Select</option>
               {datas && 
                datas.map((item: OptionSet, index) => {
                   return (
                     <option key={index} value={item.value}>{item.label}</option>
                   );
               })
               }
            </select>
            <div className={isDisabled ?'selected-value disabled' : (this.state.isShow ? 'selected-value focus' : 'selected-value')} onClick={this.clickSelectBox.bind(this)}>{ this.state.selectedLabel ? this.state.selectedLabel : (this.state.selectedValue ? this.state.selectedValue : 'Select') }</div>
            <div className="arrow"></div>
            { this.state.isShow &&
               <div className="options">
               {datas &&
                  datas.map((item: OptionSet, index:number) => {
                     return (
                        <div key={index} onClick={() => this.clickSelectValue(item)} className={ this.state.selectedValue === item.value ? 'option selected' : (this.state.focusedIndex === index.toString() ? 'option indexed' : 'option')}>{item.label}</div>
                     );
                  })  
                  }
               </div>
            }
      </div>
      );
   }
}