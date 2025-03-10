import NavBar from "@/components/navBar/NavBarNext";
import { redirect } from "next/navigation";
// import { createClient } from "@/lib/supabase/server";
import { Toaster } from "@/components/ui/toaster"

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // const supabase = createClient()

//     const { data, error } = await supabase.auth.getUser()
//     if (error || !data?.user) {
//       redirect('/login')
//   }
    return (
      <div className="flex h-screen flex-col ">
        <NavBar />
          <main className="flex-1">{children}</main>
        <Toaster />
      </div>
    );
}