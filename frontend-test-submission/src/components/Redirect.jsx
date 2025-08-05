import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Log } from '../../../logging-middleware/logger';

const Redirect = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/redirect/${shortcode}`);
        const data = await res.json();
        Log(`Redirecting to ${data.original} via shortcode ${shortcode}`);
        window.location.href = data.original;
      } catch (err) {
        Log(`Redirect failed for ${shortcode}: ${err.message}`);
        navigate('/');
      }
    };

    handleRedirect();
  }, [shortcode, navigate]);

  return <p>Redirecting...</p>;
};

export default Redirect;
