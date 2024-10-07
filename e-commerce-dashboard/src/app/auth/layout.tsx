import { Header } from "@/components/header";
import { SideBAr } from "@/components/sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex gap-10">
          {" "}
          <SideBAr />
          <div className="w-[calc(100%-250px)] bg-gray-300">{children}</div>
        </div>
      </body>
    </html>
  );
}
