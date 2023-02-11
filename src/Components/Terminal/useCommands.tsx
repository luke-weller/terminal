import { useMemo } from "react";
import Header from "../Header";

const linkedinUrl = "https://www.linkedin.com/in/wellerluke/";

export function useCommands(
  resetTerminal: () => void,
  pushToHistory: (
    item: import("./types").TerminalHistoryItem
  ) => void
) {
  return useMemo(
    () => ({
      clear: async () => {
        await resetTerminal();
        await pushToHistory(
          <Header />
        );
      },
      // prettier-ignore
      help: async () => {
          await pushToHistory(
            <>
              <div>
                <p>
                  <span className="terminal__prompt__label">
                    lukes-portfolio %
                  </span>
                  <span className="terminal__prompt__input">help</span>
                </p>
                <p>These are common commands used in various situations:</p>
                &nbsp;help            |   get help
                <br />
                &nbsp;clear           |   clear the terminal
                <br />
                &nbsp;skills          |   see what skills I have
                <br />
                &nbsp;experience      |   explore my experience
                <br />
                &nbsp;qualifications  |   see my qualifications
                <br />
                &nbsp;linkedin        |   open linkedin
                <br />
                &nbsp;interests       |   learn about me
                <br />
                &nbsp;contact         |   get in touch with me
                <br />
                &nbsp;status          |   discover employment status
                <br />
              </div>
            </>
          );
        },
      experience: async () => {
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">lukes-portfolio %</span>
              <span className="terminal__prompt__input">experience</span>
            </p>
            <div>list experience here</div>
          </>
        );
      },
      linkedin: async () => {
        window.open(linkedinUrl, "_blank");
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">lukes-portfolio %</span>
              <span className="terminal__prompt__input">linkedin</span>
            </p>
            <div>
              LinkedIn will have opened in a new tab. Otherwise copy this link
              into your browser: {linkedinUrl}
            </div>
          </>
        );
      },
      qualifications: async () => {
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">lukes-portfolio %</span>
              <span className="terminal__prompt__input">qualifications</span>
            </p>
            <div>list qualifications here</div>
          </>
        );
      },
      contact: async () => {
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">lukes-portfolio %</span>
              <span className="terminal__prompt__input">contact</span>
            </p>
            <div>list contact here</div>
          </>
        );
      },
      interests: async () => {
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">lukes-portfolio %</span>
              <span className="terminal__prompt__input">interests</span>
            </p>
            <div>list interests here</div>
          </>
        );
      },
      status: async () => {
        await pushToHistory(
          <>
            <p>
              <span className="terminal__prompt__label">lukes-portfolio %</span>
              <span className="terminal__prompt__input">status</span>
            </p>
            <div>Currently employed full time by Netcompany, UK.</div>
          </>
        );
      },
      skills: async () => {
        await pushToHistory(
          <>
            <div>
              <p>
                <span className="terminal__prompt__label">
                  lukes-portfolio %
                </span>
                <span className="terminal__prompt__input">skills</span>
              </p>
              <p>
                I have aquired a variety of skills from several roles and have
                detailed them below. If you are intereted in exploring my
                experience in more detail please run 'experience' in this
                terminal.
              </p>
              <br />
              <strong>Programming Languages:</strong>
              <br />
              &nbsp;ReactJS
              <br />
              &nbsp;Javascript
              <br />
              &nbsp;ASP.NET
              <br />
              &nbsp;C#
              <br />
              &nbsp;HTML5
              <br />
              &nbsp;CSS
              <br />
              <br />
              <strong>Cloud Services:</strong>
              <br />
              &nbsp;Azure Functions
              <br />
              &nbsp;Azure SQL
              <br />
              &nbsp;Azure CosmosDB
              <br />
              &nbsp;AWS Lambda
              <br />
              <br />
              <strong>Development tools:</strong>
              <br />
              &nbsp;Git
              <br />
              &nbsp;GitHub
              <br />
              &nbsp;GitLab
              <br />
              &nbsp;Jira
              <br />
              <br />
              <strong>User Experience:</strong>
              <br />
              &nbsp;Rapid Prototypes
              <br />
              &nbsp;Style Guides
              <br />
              &nbsp;User Stories
              <br />
              &nbsp;User Interviews
              <br />
              &nbsp;Personas
              <br />
              &nbsp;Wireframing
              <br />
              &nbsp;Figma, Invison, Sketch.app
              <br />
              <br />
            </div>
          </>
        );
      },
    }),
    [pushToHistory, resetTerminal]
  );
}
