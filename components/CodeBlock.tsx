interface CodeBlockProps {
  title?: string;
  code: string;
  hint?: string;
}

const CodeBlock = ({ title, code, hint }: CodeBlockProps) => (
  <div className="min-w-0">
    {title && <p className="mb-2 text-sm text-text">{title}</p>}
    <pre className="overflow-x-auto rounded-lg border border-line bg-raised px-4 py-3 font-mono text-xs leading-6 text-text">
      <code>{code}</code>
    </pre>
    {hint && <p className="mt-2 text-xs leading-6 text-muted">{hint}</p>}
  </div>
);

export default CodeBlock;
