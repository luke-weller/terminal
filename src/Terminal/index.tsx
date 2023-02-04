import './terminal.css';
import {ForwardedRef, forwardRef, useCallback, useEffect, useRef} from "react";
import {TerminalHistory, TerminalHistoryItem} from "./types";

export type TerminalProps = {
  history: TerminalHistory;
  promptLabel?: TerminalHistoryItem;
};

export const Terminal = forwardRef(
  (props: TerminalProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      history = [],
      promptLabel = '>',
    } = props;

    /**
     * Focus on the input whenever we render the terminal or click in the terminal
     */
    const inputRef = useRef<HTMLInputElement>();
    useEffect(() => {
      inputRef.current?.focus();
    });

    const focusInput = useCallback(() => {
      inputRef.current?.focus();
    }, []);

    return (
    <div className="terminal" ref={ref} onClick={focusInput}>
      {history.map((line, index) => (
        <div className="terminal__line" key={`terminal-line-${index}-${line}`}>
          {line}
        </div>
      ))}
      <div className="terminal__prompt">
        <div className="terminal__prompt__label">{promptLabel}</div>
        <div className="terminal__prompt__input">
          <input
            type="text"
            // @ts-ignore
            ref={inputRef}
          />
        </div>
      </div>
    </div>
  );
});