import { Component } from 'react';
import './App.scss';
import SelectBox, { OptionSet } from './components/select-box/select-box';

class App extends Component {
  render() {
    const testData : OptionSet[] = [
      { value: '더 기프팅 컴퍼니', label: '더 기프팅 컴퍼니'},
      { value: '월간 가슴', label: '월간 가슴' },
      { value: '인더웨어', label: '인더웨어' },
      { value: '프론트엔드 엔지니어', label: '프론트엔드 엔지니어' }
    ];
  
    return (
      <div className="App">
        <SelectBox
          datas={testData}
        ></SelectBox>
      </div>
    );
  }
}

export default App;
