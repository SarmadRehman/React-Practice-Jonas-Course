// FOR ANY ERROR OCCUR ON LOADING
export function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🎃</span> {message}
    </p>
  );
}
