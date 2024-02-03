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
        "label": "Utenti",
        "icon": "users",
        "url": "/users"
    },
    {
        "label": "Componenti",
        "icon": "layerGroup",
        "url": "/components"
    },
    {
        "label": "Categorie",
        "icon": "layerGroup",
        "url": "/categories"
    },
    {
        "label": "Marchi",
        "icon": "copy",
        "url": "/brands"
    },
    {
        "label": "Modelli",
        "icon": "listCheck",
        "url": "/models"
    },
    {
        "label": "Annunci",
        "icon": "advertising",
        "url": "/spots"
    },
    {
        "label": "Segnalazioni",
        "icon": "exclamation",
        "url": "/dashboard"
    },
    {
        "label": "Richieste contatto",
        "icon": "list",
        "url": "/dashboard"
    },
    {
        "label": "Roles",
        "icon": "dashboard",
        "url": "/roles"
    }
]
