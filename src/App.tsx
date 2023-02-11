import { useEffect } from "react";
import { Terminal } from "./Components/Terminal";
import { useCommands } from "./Components/Terminal/useCommands";
import { useTerminal } from "./Components/Terminal/hooks/useTerminal";
import Header from "./Components/Header";

function App() {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();

  useEffect(() => {
    resetTerminal();

    pushToHistory(<Header />);
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
