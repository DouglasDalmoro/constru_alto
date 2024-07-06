export function Container({ children, className }) {
  return (
    <div className={className ? `container ${className}` : "container"}>
      {children}
    </div>
  );
}
