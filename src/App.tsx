import { useEffect, useMemo } from "react";
import { Terminal } from "./Terminal";
import { useCommands } from "./Terminal/useCommands";
import { useTerminal } from "./Terminal/hooks/useTerminal";


function App() {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();

  useEffect(() => {
    resetTerminal();

    pushToHistory(
      <>
        <h1>portfolio-terminal:luke-weller</h1>
        Run 'help' to get started
        <br />
      </>
    );
  }, [pushToHistory, resetTerminal]);

  const commands = useCommands(resetTerminal, pushToHistory);

  return (
    <div className="App">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>lukes-portfolio % </>}
        commands={commands}
      />
    </div>
  );
}

export default App;
