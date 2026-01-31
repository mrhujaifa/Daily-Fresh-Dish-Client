import Navbar from "@/components/layouts/Navbar";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {children}
    </div>
  );
}
