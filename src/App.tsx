import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button'
import Alert, { AlertType } from './components/Alert';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">Hello</Button>
        <Alert title="成功" type={AlertType.Success}/>
      </header>
    </div>
  );
}

export default App;
