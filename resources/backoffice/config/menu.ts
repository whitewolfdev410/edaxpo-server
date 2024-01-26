import {ICON_INDEX} from "@b/config/icons";

type MenuItem = {
    label: string,
    icon: keyof typeof ICON_INDEX,
    url: string
}

export const menuItems: MenuItem[] = [
    {
        "label": "Dashboard",
        "icon": "dashboard",
        "url": "/dashboard"
    },
    {
        "label": "Annunci",
        "icon": "advertising",
        "url": "/spots"
    },
    {
        "label": "Segnalazioni",
        "icon": "exclamation",
        "url": "/components"
    },
    {
        "label": "Richieste contatto",
        "icon": "list",
        "url": "/components"
    },
    {
        "label": "Componenti",
        "icon": "layerGroup",
        "url": "/components"
    },
    {
        "label": "Marche",
        "icon": "copy",
        "url": "/components"
    },
    {
        "label": "Modelli",
        "icon": "listCheck",
        "url": "/components"
    },
    {
        "label": "Categorie",
        "icon": "layerGroup",
        "url": "/categories"
    },
    {
        "label": "Utenti",
        "icon": "users",
        "url": "/users"
    },
    {
        "label": "Roles",
        "icon": "dashboard",
        "url": "/roles"
    }
]
