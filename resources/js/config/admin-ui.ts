import type { ConfigContextType } from '@logicpanel/admin-ui'
import { MoreOutlined } from "@ant-design/icons";
import HorizontalLayoutPage from "@/Components/HorizontalLayoutPage";
import Dialog from "@/Components/Dialog";
import {apiClient} from "@/services/http/client";

const showResponseMessage = (data: {
  error: boolean
  message: string
}) => {
  alert(data.message)
  // showNotification(data.error ? 'error' : 'success', data.message)
}

const adminUiConfig = (navigate: any): ConfigContextType => ({
  DefaultCrudLayout: HorizontalLayoutPage,
  DefaultSearchComponent: () => null,
  // SearchSettingsComponent: undefined,
  TableActionButtons: () => null,
  // ConfirmDeleteMessage: "global.confirm_delete",
  TableContextMenuIcon: MoreOutlined,
  ModalComponent: Dialog,
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
