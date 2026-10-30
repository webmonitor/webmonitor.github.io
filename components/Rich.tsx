import { Fragment } from 'react';

const tokenPattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;

const Rich = ({ text }: { text: string }) => (
  <>
    {text.split(tokenPattern).filter(Boolean).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-medium text-text">
            {part.slice(2, -2)}
          </strong>
        );
      }

      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={index} className="font-mono text-[0.9em] text-text">
            {part.slice(1, -1)}
          </code>
        );
      }

      return <Fragment key={index}>{part}</Fragment>;
    })}
  </>
);

export default Rich;
