import { Calendar, Telescope, ShieldQuestion, Book, TicketCheck, CalendarPlus } from "lucide-react"
export const navbarItems = [
    {
      label: 'Événements',
      route: '/events',
      icon: Calendar,
    },
    {
      label: 'Explorer',
      route: '/explore',
      icon: Telescope,
    },
    {
      label: 'Blog',
      route: '/blog',
        icon: Book,
    },
    {
      label: 'Mes billets',
      route: '/my-tickets',
      icon: TicketCheck,
    },
    {
      label: 'Ajouter mon événement',
      route: '/add-my-event',
      icon: CalendarPlus,
    },
  ]