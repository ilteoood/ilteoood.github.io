import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

interface TypeWriterContent {
  content: string;
  delay?: number;
  deleteAll?: boolean;
}

interface TypeWriterProps {
  content: TypeWriterContent[];
  cssClass?: string;
}

export default function TypeWriter({ content, cssClass = '' }: TypeWriterProps) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, []);

  return (
    <div className={cssClass}>
      <Typewriter
        key={key}
        options={{
          strings: content.map(c => c.content),
          autoStart: true,
          loop: true,
          delay: content[0]?.delay || 50,
          deleteSpeed: 30,
        }}
        onTyping={(c) => {
          const instance = c;
          return instance;
        }}
      />
    </div>
  );
}