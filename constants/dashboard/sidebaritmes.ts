import { ChartNoAxesCombined, UserCog, TicketPercent, Home, Users, HandCoins, BringToFront, TicketsPlane} from "lucide-react"
export const adminSidebarItems = [
    {
      label: 'Tableau de bord',
      route: '/dashboard/administrator',
      icon: Home,
    },
    {
      label: 'Événements',
      route: '/dashboard/administrator/events',
      icon: TicketPercent,
    },
    {
      label: 'Statistique',
      route: '/dashboard/administrator/analytics',
      icon: ChartNoAxesCombined,
    },
    {
      label: 'Utilisateurs',
      route: '/dashboard/administrator/users',
      icon: Users
    },
    {
      label: 'Commandes',
      route: '/dashboard/administrator/orders',
      icon: BringToFront,
    },
    {
      label: 'Demandes de paiement',
      route: '/dashboard/administrator/payment-requests',
      icon: HandCoins,
    },
    {
      label: 'Rapports',
      route: '/dashboard/a1dministrator/reports',
      icon: TicketsPlane,
    },
    {
      label: 'Compte',
      route: '/dashboard/administrator/profile',
      icon: UserCog,
    }
  ]