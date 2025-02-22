export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {[
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Process", href: "#process" },
            { name: "Contact", href: "#contact" },
            { name: "Privacy", href: "#" },
          ].map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Racer Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

