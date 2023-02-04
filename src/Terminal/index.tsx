import './terminal.css';

export const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal__line">A terminal line</div>
      <div className="terminal__prompt">
        <div className="terminal__prompt__label">luke.weller:</div>
        <div className="terminal__prompt__input">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};