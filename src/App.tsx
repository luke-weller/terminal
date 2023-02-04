import React, {useEffect} from 'react';
import {Terminal} from "./Terminal";
import {useTerminal} from "./Terminal/hooks/useTerminal";

function App() {
  const {
    history,
    pushToHistory,
    setTerminalRef,
    resetTerminal,
  } = useTerminal();


  useEffect(() => {
    resetTerminal();

    pushToHistory(<>
        <div><strong>Welcome!</strong> to the terminal.</div>
      </>
    );
  }, []);

  return (
    <div className="App">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>luke.weller-portfolio % </>}
      />
    </div>
  );
}

export default App;