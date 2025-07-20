
export default function Modal({ id, header, body, footer, onCLose}) {
  return (
    <div id={id || "modalId"} className="modal">
      <div className="modal-content">
        <span onClick={onCLose} className={`close-modal-icon`}>
          &times;
        </span>
        <div className="header">
          <div className="heading">
            {header ? header : <div>Hello there</div>}
          </div>
        </div><hr/>

        <div className="content_body">{body ? body : <div>I am body</div>}</div><hr/>

        <div className="footer">
          {footer ? footer : <div>I am your footer</div>}
        </div>
      </div>
    </div>
  );
}
