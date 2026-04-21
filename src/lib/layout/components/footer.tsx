
export const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://www.linkedin.com/in/akozie"
            rel="noopener noreferrer"
            target="_blank"
          >
            akozie
          </a>
        </p>
      </div>
    </footer>
  );
};
