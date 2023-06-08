// Components to simplify the use of responsive text


export default function TitleHeader({ children, className, heading }) {
  const HeadingTag = heading;

  return (
    <HeadingTag
      className={`lg:text-h1 text-h2 
      lg:leading-h1 leading-h2 ${className}`}
    >
      {children}
    </HeadingTag>
  );
}

export function SubTitleHeader({ children, className, heading }) {
  const HeadingTag = heading;

  return (
    <HeadingTag
      className={`lg:text-h2 text-h3 
      lg:leading-h2 leading-h3 ${className}`}
    >
      {children}
    </HeadingTag>
  );
}

export function SectionTitleHeader({ children, className, heading }) {
  const HeadingTag = heading;

  return (
    <HeadingTag
      className={`lg:text-h3 text-h4 
      lg:leading-h3 leading-h4 ${className}`}
    >
      {children}
    </HeadingTag>
  );
}

export function LargestParagraph({ children, className, heading }) {
  const HeadingTag = heading;

  return (
    <HeadingTag
      className={`lg:text-p2 text-p1 
      lg:leading-p2 leading-p1 ${className}`}
    >
      {children}
    </HeadingTag>
  );
}

export function LargeParagraph({ children, className }) {
  return (
    <p
      className={`lg:text-p1 text-p 
      lg:leading-p1 leading-p ${className}`}
    >
      {children}
    </p>
  );
}

export function Paragraph({ children, className }) {
  return (
    <p
      className={`lg:text-p text-p0 
      lg:leading-p leading-p0 ${className}`}
    >
      {children}
    </p>
  );
}

export function SmallParagraph({ children, className }) {
  return (
    <p
      className={`lg:text-p0 text-00 
      lg:leading-p0 leading-p00 ${className}`}
    >
      {children}
    </p>
  );
}

