import NavBar from "@/components/navBar/NavBarNext";
import { Toaster } from "@/components/ui/toaster"

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
      <div className="flex h-screen flex-col ">
        <NavBar />
          <main className="flex-1">{children}</main>
        <Toaster />
      </div>
    );
}