export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between text-sm text-muted-foreground">
        <p>© {currentYear} React Boilerplate. All rights reserved.</p>
        <p>Built with React, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  );
}
