
import React from 'react';
import './App.css';

import ComponentC from './ComponentC';
import ComponentE from './ComponentE';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/*<ClassCounter/>*/}
      {/*<HookCounter/>*/}
      {/*<HookCounterTwo/>*/}
      {/*<HookCounterThree/>*/}
      <UserContext.Provider value={'username'}>
        <ChannelContext.Provider value={'c12'}>
          <ComponentE />
        </ChannelContext.Provider>

      </UserContext.Provider>

    </div>
  );
}

export default App;