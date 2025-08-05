import { useState } from 'react';
import { Log } from '../../../logging-middleware/logger';

const Shortner = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleShorten = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          shortcode: customCode || undefined,
          expiry: expiry || undefined,
        }),
      });

      const data = await response.json();
      const shortLink = `http://localhost:3000/${data.shortcode}`;
      setShortUrl(shortLink);
      Log(`Shortened ${url} to ${data.shortcode}`);
    } catch (error) {
      Log(`Shortening failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Custom shortcode (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expiry (minutes, optional)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <button onClick={handleShorten} disabled={!url}>Shorten</button>
      {shortUrl && (
        <p>
          Shortened URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default Shortner;