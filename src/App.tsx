import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonType, ButtonSize } from './components/Button'
import Alert, { AlertType } from './components/Alert';
import Menu from './components/Menu'
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon'

library.add(fas)

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="danger" size="10x" />
        <Menu onSelect={(index) => { alert(index) }} mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>link1</MenuItem>
          <MenuItem>link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
          <MenuItem>link3</MenuItem>
        </Menu>
        {/* <Button autoFocus>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">Hello</Button> */}
        {/* <Alert title="成功" type={AlertType.Success} /> */}

      </header>
    </div>
  );
}

export default App;
