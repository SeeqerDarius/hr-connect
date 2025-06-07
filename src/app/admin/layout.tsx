export const metadata = {
  title: "Admin | HR Connect 2025",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#08174B] text-white min-h-screen px-6 py-10">
        {children}
      </body>
    </html>
  );
}
