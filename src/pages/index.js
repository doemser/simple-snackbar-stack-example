export default function Home({ onAddToast }) {
  return (
    <>
      <h1>Snackbars</h1>
      <button onClick={() => onAddToast("Successfully did something!")}>
        Success
      </button>
      <button
        onClick={() => onAddToast("Oops, consider something here!", "warning")}
      >
        Warning
      </button>
      <button onClick={() => onAddToast("Nope.. Error!", "error")}>
        Error
      </button>
      <hr />
    </>
  );
}
