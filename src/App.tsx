import {useEffect, useMemo} from 'react';
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
        <h1>portfolio terminal</h1>
      </>
    );
  }, [pushToHistory, resetTerminal]);

  const commands = useMemo(() => ({
    'start': async () => {
      await pushToHistory(<>
          <div>
            <strong>Starting</strong> the server... <span style={{color: 'green'}}>Done</span>
          </div>
        </>);
    },
    'alert': async () => {
      alert('Hello!');
      await pushToHistory(<>
          <div>
            <strong>Alert</strong>
            <span style={{color: 'orange', marginLeft: 10}}>
              <strong>Shown in the browser</strong>
            </span>
          </div>
        </>);
    },
  }), [pushToHistory]);

  return (
    <div className="App">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>lukes-portfolio  % </>}
        commands={commands}
      />
      Happy terminal
    </div>
  );
}

export default App;