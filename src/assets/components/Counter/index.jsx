import React, { useState } from 'react';

//componente contador
function Counter() {
  const [status, setStatus] = useState(0);

  return (
    <div>
      <p>Valor: {status}</p>
      <button onClick={() => setStatus(status - 1)}>Subtrai</button>
      <button onClick={() => setStatus(status + 1)}>Soma</button>
    </div>
  );
}

export default Counter;