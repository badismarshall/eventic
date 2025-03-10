import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
// import eventiclog from '@/public/img/illustrations/Illustration.svg'
import eventiclog from '@/public/img/logos/eventic-purpul.png'
import { ForgetPasswordUserForm } from "@/components/forms/user-forgetpassword"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Eventic - Authentification",
  description: "Creéz un compte pour accéder à votre espace personnel.",
}

export default async function AuthenticationPage() {

  return (
    <>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <Button variant="outline" className="w-8 h-8 " size='icon'>
                    <Link href="/login">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                </Button>
              <h1 className="text-2xl font-semibold tracking-tight">
              Mot de passe oublié
              </h1>
              <p className="text-sm text-muted-foreground">
                Nous enverrons un nouveau mot de passe à votre compte à partir d'un e-mail
              </p>
            </div>
            <ForgetPasswordUserForm />
          </div>
        </div>
    </>
  )
}