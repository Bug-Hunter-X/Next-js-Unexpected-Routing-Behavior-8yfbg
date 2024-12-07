```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = () => {
    setIsNavigating(true);
    router.push('/', undefined, { shallow: true });
  };

  useEffect(() => {
    if (router.pathname === '/' && isNavigating) {
      setIsNavigating(false);
    }
  }, [router.pathname, isNavigating]);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```