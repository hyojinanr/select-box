import { Component } from 'react';
import './App.scss';
import SelectBox, { OptionSet } from './components/select-box/select-box';

class App extends Component {

  submitSelect(event:any) {
    event.preventDefault();

    alert("Large Select : " + event.target.elements.largeSelect.value + '\r\n' +
    "Middle Select : " + event.target.elements.middleSelect.value + '\r\n' +
    "Small Select : " + event.target.elements.smallSelect.value + '\r\n' +
    "Disabled Select : " + event.target.elements.disabledSelect.value + '\r\n'
    ); 
  }

  render() {
    const testData : OptionSet[] = [
      { value: 'Option 1', label: 'Option 1'},
      { value: 'Option 2', label: 'Option 2' },
      { value: 'Option 3', label: 'Option 3' },
      { value: 'Option 4', label: 'Option 4' }
    ];
  
    return (
      <div className="App">
        <div className="container">
          <form onSubmit={this.submitSelect.bind(this)}>
            <div className="box">
              <span>Large Select</span>
              <SelectBox
                datas={testData}
                inputName={'largeSelect'}
                className={'select-large'}
              ></SelectBox>
            </div>  

            <div className="box">
              <span>Middle Select</span>
              <SelectBox
                inputName={'middleSelect'}
                datas={testData}
              ></SelectBox>
            </div>

            <div className="box">
              <span>Small Select</span>
              <SelectBox
                datas={testData}
                inputName={'smallSelect'}
                className={'select-small'}
              ></SelectBox>
            </div>

            <div className="box">
              <span>Disabled Select</span>
              <SelectBox
                inputName={'disabledSelect'}
                datas={testData}
                isDisabled={true}
              ></SelectBox>
            </div>

            
            <div className="btns">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
