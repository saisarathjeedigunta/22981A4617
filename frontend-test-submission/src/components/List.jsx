import { useEffect, useState } from 'react';
import { Log } from '../../../logging-middleware/logger';

const List = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/urls');
        const data = await res.json();
        setUrls(data);
        Log('Fetched all shortened URLs');
      } catch (err) {
        Log(`Error fetching URL list: ${err.message}`);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div>
      <h2>All Shortened URLs</h2>
      <ul>
        {urls.map(({ original, shortcode, clickCount }) => (
          <li key={shortcode}>
            <strong>{original}</strong> → <a href={`/${shortcode}`}>{shortcode}</a> ({clickCount} clicks)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
