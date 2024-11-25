import { useEffect, useRef, useState } from "react";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    //@ts-ignore
    const message = inputRef.current.value;
    if (!socket) {
      return;
    }
    //@ts-ignore
    socket.send(message);
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev) => {
      console.log(ev);
      alert(ev.data);
    };
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Enter a message..." />
      <button onClick={sendMessage}>send</button>
    </>
  );
}

export default App;
