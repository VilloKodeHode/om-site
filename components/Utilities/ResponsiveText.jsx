// Components to simplify the use of responsive text

export default function ResponsiveH1({ children, className }) {
  return (
    <h1
      className={`lg:text-h1 sm:text-h2 text-h3 lg:leading-h1 sm:leading-h2 leading-h3 ${className}`}
    >
      {children}
    </h1>
  );
}

export function StandardH1({ children, className }) {
  return <h1 className={`text-h1 leading-h1 ${className}`}>{children}</h1>;
}

export function ResponsiveHeaderH1({ children, className }) {
  return (
    <h1
      className={`lg:text-h1 sm:text-h2 text-h3 lg:leading-h1 sm:leading-h2 leading-h3 ${className}`}
    >
      {children}
    </h1>
  );
}

export function ResponsiveH2({ children, className }) {
  return (
    <h2 className={`sm:leading-h2 leading-h3 sm:text-h2 text-h3 ${className}`}>
      {children}
    </h2>
  );
}

export function StandardH2({ children, className }) {
  return <h2 className={`text-h2 leading-h2 ${className}`}>{children}</h2>;
}

export function ResponsiveH3({ children, className }) {
  return (
    <h3 className={`md:text-h3 text-h4 md:leading-h3 leading-h4 ${className}`}>
      {children}
    </h3>
  );
}

export function StandardH3({ children, className }) {
  return <h3 className={`text-h3 leading-h3 ${className}`}>{children}</h3>;
}

export function ResponsiveH4({ children, className }) {
  return (
    <h4 className={`md:text-h4 text-h5 md:leading-h4 leading-h5 ${className}`}>
      {children}
    </h4>
  );
}

export function StandardH4({ children, className }) {
  return <h4 className={`text-h4 leading-h4 ${className}`}>{children}</h4>;
}

export function ResponsiveH5({ children, className }) {
  return (
    <h5 className={`md:text-h5 text-h6 md:leading-h5 leading-h6 ${className}`}>
      {children}
    </h5>
  );
}

export function StandardH5({ children, className }) {
  return <h5 className={`text-h5 leading-h5 ${className}`}>{children}</h5>;
}

export function ResponsiveP({ children, maxWidth, className }) {
  return (
    <p
      className={`md:text-p text-p0 md:leading-p leading-p0 ${className} ${maxWidth}`}
    >
      {children}
    </p>
  );
}

export function StandardP({ children, className }) {
  return <p className={`text-p leading-p ${className}`}>{children}</p>;
}

export function ResponsiveSmall({ children, maxWidth, className }) {
  return (
    <p
      className={`md:text-p0 text-small md:leading-p0 leading-small ${className} ${maxWidth}`}
    >
      {children}
    </p>
  );
}

export function ResponsiveMini({ children, maxWidth, className }) {
  return (
    <p
      className={`md:text-small text-mini md:leading-small leading-mini ${className} ${maxWidth}`}
    >
      {children}
    </p>
  );
}

export function ResponsiveLi({ children, maxWidth, className }) {
  return (
    <li
      className={`md:text-p0 text-small md:leading-p0 leading-small ${className} ${maxWidth}`}
    >
      {children}
    </li>
  );
}

export function ResponsiveUL({ children, className }) {
  return (
    <ul
      className={`grid gap-4 md:text-p text-p0 md:leading-p leading-p0 [&>*]:font-mono p-12 ${className}`}
    >
      {children}
    </ul>
  );
}
