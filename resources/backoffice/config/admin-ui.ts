import type { ConfigContextType } from '@logicpanel/admin-ui'
import { MoreOutlined } from "@ant-design/icons";
import HorizontalLayoutPage from "../components/layout/HorizontalLayoutPage";
import {apiClient} from "../services/http/client";
import CrudDialog from "@b/components/dialog/CrudDialog";
import {notification} from "antd";

const showResponseMessage = (data: {
  error: boolean
  message: string
}) => {
    notification[data.error ? 'error' : 'success']({
        // message: data.error ? 'Errore' : 'Successo',
        message: data.message,
        placement: 'topRight'
    })
}

const adminUiConfig = (navigate: any): ConfigContextType => ({
  DefaultCrudLayout: HorizontalLayoutPage,
  DefaultSearchComponent: () => null,
  // SearchSettingsComponent: undefined,
  TableActionButtons: () => null,
  // ConfirmDeleteMessage: "global.confirm_delete",
  TableContextMenuIcon: MoreOutlined,
  ModalComponent: CrudDialog,
  DefaultResponseMessage: showResponseMessage,
  apiClient,
  getPageFromUrl(): number | string {
    return 1
  },
  handleDelete(props: any): Promise<any> {
    return apiClient.delete(`${props.apiResource}/${props.id}`)
  },
  navigate: {
    goBack () {
      if(navigate)
      navigate(-1)
    },
    push (p1: string) {
      if(navigate)
      navigate(p1)
    },
    replace (p1: string) {
      if(navigate)
      navigate(p1, { replace: true })
    }
  },
  setPageInUrl(props: { page: number | string }): void {

  },
  locales: {
    'global.confirm_delete': 'Sei sicuro?',
	  'global.actions': 'Azioni'
    // "global.confirm_delete_content": "Check in case you did it by mistake",
  }
})

export default adminUiConfig
