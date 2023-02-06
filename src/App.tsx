import { useEffect, useMemo } from "react";
import { Terminal } from "./Terminal";
import { useTerminal } from "./Terminal/hooks/useTerminal";

const linkedinUrl = 'https://www.linkedin.com/in/wellerluke/';

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

  // prettier-ignore
  const commands = useMemo(
    () => ({
      clear: async () => {
        await resetTerminal();
      },
      help: async () => {
        await pushToHistory(
          <>
            <div>
              <p>
                <span className="terminal__prompt__label">
                  lukes-portfolio %{" "}
                </span>{" "}
                help
              </p>
              <p>These are common commands used in various situations:</p>
              &nbsp;help              |   find out what commands you can runn
              <br />
              &nbsp;clear             |   clear the terminal
              <br />
              &nbsp;skills            |   see what skills I have
              <br />
              &nbsp;experience        |   explore my experience
              <br />
              &nbsp;qualifications    |   checkout my qualifications
              <br />
              &nbsp;linkedin          |   open a new tab with my LinkedIn profile
              <br />
              &nbsp;interests         |   findo out a little more about me personally
              <br />
              &nbsp;contact           |   get in touch with me
              <br />
              &nbsp;----------------------
            </div>
          </>
        );
      },
      experience: async () => {
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">
                lukes-portfolio %{" "}
              </span>{" "}
              experience
            </p>
            <div>list experience here</div>
          </>
        );
      },
      linkedin: async () => {
        window.open(linkedinUrl, '_blank', 'noreferrer')
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">
                lukes-portfolio %{" "}
              </span>{" "}
              linkedin
            </p>
            <div>LinkedIn will have opened in a new tab. Otherwise copy this link into your browser: {linkedinUrl}</div>
          </>
        );
      },
      qualifications: async () => {
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">
                lukes-portfolio %{" "}
              </span>{" "}
              qualifications
            </p>
            <div>list qualifications here</div>
          </>
        );
      },
      contact: async () => {
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">
                lukes-portfolio %{" "}
              </span>{" "}
              contact
            </p>
            <div>list contact here</div>
          </>
        );
      },
      interests: async () => {
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">
                lukes-portfolio %{" "}
              </span>{" "}
              contact
            </p>
            <div>list interests here</div>
          </>
        );
      },
      skills: async () => {
        await pushToHistory(
          <>
            <div>
              <p>
                <span className="terminal__prompt__label">
                  lukes-portfolio %{" "}
                </span>{" "}
                skills
              </p>
              These are skills with industry experience:
              <br />
              &nbsp;ReactJS
              <br />
              &nbsp;ASP.NET
              <br />
              &nbsp;Azure
              <br />
              &nbsp;AWS
              <br />
              &nbsp;MySQL
              <br />
              &nbsp;Typescript
              <br />
              &nbsp;----------------------
            </div>
          </>
        );
      },
    }),
    [pushToHistory]
  );

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
