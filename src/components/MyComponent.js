import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>User ID</th>
              <th style={styles.tableHeader}>ID</th>
              <th style={styles.tableHeader}>Title</th>
              <th style={styles.tableHeader}>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td style={styles.tableCell}>{item.userId}</td>
                <td style={styles.tableCell}>{item.id}</td>
                <td style={styles.tableCell}>{item.title}</td>
                <td style={styles.tableCell}>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  tableHeader: {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
  },
  tableCell: {
    border: '1px solid black',
    padding: '8px',
  },
};

export default MyComponent;
