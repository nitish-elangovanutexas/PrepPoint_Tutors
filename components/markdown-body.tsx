import ReactMarkdown from "react-markdown";

export function MarkdownBody({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 className="mt-10 text-2xl font-bold text-navy first:mt-0">{children}</h2>
        ),
        h3: ({ children }) => <h3 className="mt-8 text-xl font-semibold text-navy">{children}</h3>,
        p: ({ children }) => <p className="mt-4 leading-relaxed text-muted">{children}</p>,
        ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">{children}</ul>,
        ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted">{children}</ol>,
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        a: ({ href, children }) => (
          <a href={href} className="font-medium text-navy underline decoration-accent">
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="mt-6 border-l-4 border-accent bg-background/80 py-2 pl-4 pr-2 text-foreground/90 italic">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-10 border-border" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
