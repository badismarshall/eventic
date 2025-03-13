

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Metadata } from "next"



export const metadata: Metadata = {
    title: "Compte",
    description: "Gérer votre compte.",
  }


export default async function SettingsAccountPage() {
    return(
        <div>
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Gérer Votre Compte! </h2>
                {/* <p className="text-muted-foreground">
                Changer votre mot de passe!
                </p> */}
              </div>
            </div>
          <div >
            <Card className="max-w-4xl">
              {/* <CardHeader>
                  <CardTitle>Changer votre mot de passe</CardTitle>
              </CardHeader> */}
              <CardContent>
                <form className="space-y-6 pt-3">
                  <div className="space-y-1">
                    <Label>Email</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                  <Label>Nom d'utilisateur</Label>
                  <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>Prénom</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>Nom</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>Numéro du Tel</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>Date de naissance</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>Photo de profile</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>Adresse de la rue</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>Cité</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>Code Postale</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>Code Postale</Label>
                    <Input placeholder="" />
                  </div>
                  <div className="space-y-1">
                    <Label>État</Label>
                    <Input placeholder="" />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="px-6 py-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Confirmer</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Vous etes sur !</DialogTitle>
                      <DialogDescription>
                        Vous avez demandé à changer votre mot de passe. Voulez-vous continuez?
                      </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                      <Button type="submit">Confirmer</Button>
                      <DialogClose asChild>
                          <Button variant="destructive">Cancel</Button>
                       </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            </div>
          </div>
        </div>
    )
}