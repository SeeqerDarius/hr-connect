import "../globals.css";

export const metadata = {
  title: "Admin | HR Connect",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased bg-[#08174B] text-white min-h-screen px-6 py-10">
      {children}
    </div>
  );
}
