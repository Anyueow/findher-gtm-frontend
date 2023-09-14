import React from 'react';

function GoogleMapsLoader() {
  React.useEffect(() => {
    // Check if the script is already loaded
    // if (!window.google) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    // }
  }, []);

  return null; // This component doesn't render anything
}

export default GoogleMapsLoader;