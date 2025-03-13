
import { 
  ChartNoAxesCombined, 
  UserCog, 
  TicketPercent, 
  Home, 
  Users, 
  HandCoins, 
  BringToFront, 
  TicketsPlane, 
  Settings, 
  CircleHelp,
  ScanQrCode,
  MapPinHouse,
  Star,
  Euro,
  ShoppingCart,
  FileHeart,
  StarIcon,
  UserRoundCheck} 
  from "lucide-react"



export const adminSidebarItems = [
  {
    title: 'Tableau de bord',
    url: '/dashboard/administrator',
    icon: Home,
    isActive: true,
  },
  {
    title: 'Paramètres',
    url: '/dashboard/administrator/settings',
    icon: Settings,
    isActive: false,
    items : [
      {
        title: 'SEO, Layout',
        url: '/dashboard/administrator/settings/layout',
      },
      {
        title: 'Menu',
        url: '/dashboard/administrator/settings/menu',
      },
      {
        title: 'Page d\'accueil',
        url: '/dashboard/administrator/settings/homepage-hero',
      },
      {
        title: 'Paiements et frais',
        url: '/dashboard/administrator/settings/payments',
      },
      {
        title: 'Caisse',
        url: '/dashboard/administrator/settings/checkout',
      },
      {
        title: 'Recaptcha',
        url: '/dashboard/administrator/settings/recaptcha',
      },
      {
        title: 'Cartes',
        url: '/dashboard/administrator/settings/maps',
      },
      {
        title: 'Connexion sociale',
        url: '/dashboard/administrator/settings/social-login',
      },
      {
        title: 'Page de liste des événements',
        url: '/dashboard/administrator/settings/events-list-page',
      },
    ]
  },
  {
    title: 'Événements',
    url: '/dashboard/administrator/events',
    icon: TicketPercent,
    isActive: false,
    items : [
      {
        title: 'Gérer les événements',
        url: '/dashboard/administrator/manage-events',
      },
      {
        title: 'Catégories',
        url: '/dashboard/administrator/events/categories',
      },
      {
        title: 'Langues',
        url: '/dashboard/administrator/events/languages',
      },
      {
        title: 'Publics',
        url: '/dashboard/administrator/events/audiences',
      }
    ]
  },
  {
    title: 'Statistique',
    url: '/dashboard/administrator/analytics',
    icon: ChartNoAxesCombined,
    isActive: false,
  },
  {
    title: 'Utilisateurs',
    url: '/dashboard/administrator/users',
    icon: Users,
    isActive: false,
  },
  {
    title: 'Commandes',
    url: '/dashboard/administrator/orders',
    icon: BringToFront,
    isActive: false,
  },
  {
    title: 'Demandes de paiement',
    url: '/dashboard/administrator/payment-requests',
    icon: HandCoins,
    isActive: false,
  },
  {
    title: 'Rapports',
    url: '/dashboard/administrator/reports',
    icon: TicketsPlane,
    isActive: false,
  },
  {
    title: 'Centre d\'aide',
    url: '/dashboard/administrator/help-center',
    icon: CircleHelp,
    isActive: false,
    items: [
      {
        title: 'Articles',
        url: '/dashboard/administrator/help-center/articles',
      },
      {
        title: 'Catégories',
        url: '/dashboard/administrator/help-center/categories',
      }
    ]
  },
  {
    title: 'Compte',
    url: '/dashboard/profile',
    icon: UserCog,
    isActive: false,
    items: [
      {
        title: 'Changer le mot de passe',
        url: '/dashboard/change-password',
      },
    ]
  }
]


export const organizerSidebarItems = [
    {
      title: 'Tableau de bord',
      url: '/dashboard/organizer',
      icon: Home,
    },
    {
      title: 'Mon profil d\'organisateur',
      url: '/dashboard/organizer/profile',
      icon: UserCog,
    },
    {
      title: 'Mes événements',
      url: '/dashboard/organizer/my-events',
      icon: TicketPercent,
    },
    {
      title: 'Mes revenus',
      url: '/dashboard/organizer/my-revenues',
      icon: Euro,
    },
    {
      title: 'Application Scanner',
      url: '/dashboard/organizer/scanner',
      icon: ScanQrCode,
      isActive: false,
      items: [
        {
          title: 'Mes Scanners',
          url: '/dashboard/organizer/my-scanners',
        },
        {
          title: 'Paramètres de l\'application Scanner',
          url: '/dashboard/organizer/settings/scanner-app',

        }
      ]
    },
    {
      title: 'Mes points de vente',
      url: '/dashboard/organizer/points-of-sale',
      icon: MapPinHouse,
    },
    {
      title: 'Avis',
      url: '/dashboard/organizer/reviews',
      icon: Star,
    },
    {
      title: 'Paiements',
      url: '/dashboard/organizer/my-payout-requests',
      icon: HandCoins,
      isActive: false,
      items: [
        {
          title: 'Demandes de paiement',
          url: '/dashboard/organizer/my-payout-requests',
        },
        {
          title: 'Méthodes de paiement',
          url: '/dashboard/organizer/payment-methods',
        }
      ]
    },
    {
      title: 'Rapports',
      url: '/dashboard/organizer/reports',
      icon: TicketsPlane,
    },
    {
      title: 'Compte',
      url: '/dashboard/profile',
      icon: UserCog,
      isActive: false,
      items: [
        {
          title: 'Changer le mot de passe',
          url: '/dashboard/change-password',
        },
      ]
    }
]

export const pointofsaleSidebarItems = [
  {
    title: 'Événements en vente',
    url: '/dashboard/pointofsale',
    icon: TicketPercent,
  },
  {
    title: 'Mes commandes',
    url: '/dashboard/pointofsale/my-orders',
    icon: BringToFront,
  },
]

export const scannerSidebarItems = [
  {
    title: 'Liste des événements',
    url: '/dashboard/scanner',
    icon: TicketPercent,
  },
]

export const attendeeSidebarItems = [
  {
    title: 'Mes billets',
    url: '/dashboard/attendee/my-tickets',
    icon: TicketPercent,
  },
  {
    title: 'Mon panier',
    url: '/dashboard/attendee/cart',
    icon: ShoppingCart,
  },
  {
    title: 'Mes favoris',
    url: '/dashboard/attendee/my-favorites',
    icon: FileHeart,
  },
  {
    title: 'Mes avis',
    url: '/dashboard/attendee/my-reviews',
    icon: StarIcon,
  },
  {
    title: 'Mes abonnements',
    url: '/dashboard/attendee/following',
    icon: UserRoundCheck,
  },
  {
    title: 'Compte',
    url: '/dashboard/attendee/account',
    icon: UserCog,
    isActive: false,
    items: [
      {
        title: 'Paramètres',
        url: '/dashboard/attendee/account/settings',
      },
      {
        title: 'Changer le mot de passe',
        url: '/dashboard/change-password',
      }
    ]
  }
]