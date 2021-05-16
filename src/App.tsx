import { Component } from 'react';
import './App.scss';
import SelectBox, { OptionSet } from './components/select-box/select-box';

class App extends Component {

  submitSelect(event:any) {
    event.preventDefault();

    alert("Large Select : " + event.target.elements.largeSelect.value + '\r\n' +
    "Middle Select : " + event.target.elements.middleSelect.value + '\r\n' +
    "Small Select : " + event.target.elements.smallSelect.value + '\r\n'); 
  }

  render() {
    const testData : OptionSet[] = [
      { value: '더 기프팅 컴퍼니', label: '더 기프팅 컴퍼니'},
      { value: '월간 가슴', label: '월간 가슴' },
      { value: '인더웨어', label: '인더웨어' },
      { value: '프론트엔드 엔지니어', label: '프론트엔드 엔지니어' }
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
            <div className="btns">
              <button type="submit">확인</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
