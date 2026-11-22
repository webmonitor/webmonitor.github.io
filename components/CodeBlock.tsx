interface CodeBlockProps {
  title?: string;
  code: string;
  hint?: string;
}

const CodeBlock = ({ title, code, hint }: CodeBlockProps) => (
  <figure className="m-0 min-w-0">
    {title && <figcaption className="mb-3 text-sm font-medium leading-6 text-text">{title}</figcaption>}
    <pre className="code-surface" tabIndex={0}>
      <code>{code}</code>
    </pre>
    {hint && <p className="mt-3 text-xs leading-6 text-muted">{hint}</p>}
  </figure>
);

export default CodeBlock;
