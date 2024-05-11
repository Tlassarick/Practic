
import React, { useState, useEffect } from 'react';
import Card from './component/Card';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Здесь будет функция для загрузки данных из базы данных
    // Предположим, что это промис, возвращающий массив объектов
    fetchDataFromDatabase().then(fetchedData => setData(fetchedData));
  }, []);

  return (
    <div>
      {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

// Заглушка для функции, которая будет получать данные
function fetchDataFromDatabase() {
  // Это пример, в реальном приложении данные будут загружаться через API
  return Promise.resolve([
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Doe', position: 'Designer' },
    // и так далее...
  ]);
}

export default App;
