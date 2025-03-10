import { TooltipProvider } from "@/components/ui/tooltip";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
      <div>
        <TooltipProvider>
            {children}
        </TooltipProvider>
      </div>
    );
}