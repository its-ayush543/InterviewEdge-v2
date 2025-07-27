export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div suppressHydrationWarning={true}>
      {children}
    </div>
  );
}
