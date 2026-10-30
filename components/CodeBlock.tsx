interface CodeBlockProps {
  title?: string;
  code: string;
  hint?: string;
}

const CodeBlock = ({ title, code, hint }: CodeBlockProps) => (
  <div className="min-w-0 space-y-2">
    {title && <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">{title}</p>}
    <pre className="w-full overflow-x-auto rounded-sm border border-line bg-surface p-4 font-mono text-xs leading-7 text-text">
      <code>{code}</code>
    </pre>
    {hint && <p className="text-xs leading-6 text-muted">{hint}</p>}
  </div>
);

export default CodeBlock;
