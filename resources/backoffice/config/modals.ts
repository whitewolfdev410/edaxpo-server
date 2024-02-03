import UserForm from "../pages/users/UserForm";
import SpotForm from "@b/pages/spots/SpotForm";
import ComponentForm from "@b/pages/components/ComponentForm";
import BrandForm from "@b/pages/brands/BrandForm";
import ModelForm from "@b/pages/models/ModelForm";
import CategoryForm from "@b/pages/categories/CategoryForm";

export const modalsRegistry = {
    user: {
        Component: UserForm
    },
    spot: {
        Component: SpotForm
    },
    component: {
        Component: ComponentForm
    },
    brand: {
        Component: BrandForm
    },
    model: {
        Component: ModelForm
    },
    category: {
        Component: CategoryForm
    }
}
