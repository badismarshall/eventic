import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
         <div className="overflow-x-hidden container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col  p-10 text-white lg:flex dark:border-r bg-gradient-to-r from-purple-500 to-indigo-500">
          <div className="absolute inset-0 top-36 bg-contain bg-center bg-[url('/img/illustrations/Illustration.svg')] bg-no-repeat "/>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Eventic
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Meilleure application de réservation de billets
              </p>
              <footer className="text-xs">En Algérie</footer>
            </blockquote>
          </div>
        </div>
        <main>{children}</main>
        </div>
        <Toaster />
      </>
    );
}