interface SectionHeadingProps {
  title: string;
  description: string;
}

const SectionHeading = ({ title, description }: SectionHeadingProps) => (
  <div className="max-w-2xl">
    <h2 className="font-serif text-3xl font-medium leading-tight tracking-[-0.015em] text-text sm:text-4xl">
      {title}
    </h2>
    <p className="mt-4 text-sm leading-7 text-secondary sm:text-base sm:leading-8">{description}</p>
  </div>
);

export default SectionHeading;
