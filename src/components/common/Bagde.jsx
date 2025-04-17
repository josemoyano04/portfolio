import "../../styles/Badge.css";

export function Badge({ children, ...props}) {
  return (
    <div {...props}>
      <div className="badge-wrapper">
        <span className="badge-border">
          <div className="badge-content">
            {children}
          </div>
        </span>
      </div>
    </div>
  );
}
