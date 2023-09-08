export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center gap-4 md:h-20 md:flex-row justify-center">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          This website is not affiliated with Microsoft nor with the Metacritic,
          the data contained on this website is for informational purposes only
          and may not be accurate.
        </p>
      </div>
    </footer>
  );
}
