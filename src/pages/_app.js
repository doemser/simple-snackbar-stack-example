import { useState } from "react";
import { nanoid } from "nanoid";
import Toast from "@/components/Toast";

export default function App({ Component, pageProps }) {
  const [toasts, setToasts] = useState([]);

  function handleAddToast(message, variant = "success") {
    const id = nanoid();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, visible: true, message, variant },
    ]);

    // Set timeout to hide toast after 2500ms (500ms before removal for transition)
    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, visible: false } : toast
        )
      );
    }, 4500);

    // Set timeout to remove toast after 3000ms
    setTimeout(() => {
      handleDeleteToast(id);
    }, 5000);
  }

  function handleDeleteToast(id) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  return (
    <>
      <Component {...pageProps} onAddToast={handleAddToast} />

      <ul style={{ padding: 0 }}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onToastClose={handleDeleteToast}
          />
        ))}
      </ul>
    </>
  );
}
