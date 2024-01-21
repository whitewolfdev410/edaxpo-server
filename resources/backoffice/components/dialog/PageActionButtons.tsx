import { usePageContext } from '@logicpanel/admin-ui'
import { FormattedMessage } from 'react-intl'
import {Button} from "antd";

export const PageActionButtons = ({ showDeleteButton = true, showSaveButton = true }: any) => {
  const {
    handleSave,
    handleDelete,
    handleClose,
    handleSaveAndClose,
    buttonsConfig: buttons,
    remote,
    getForm
  } = usePageContext()
  return (
    <div className='flex flex-row justify-end gap-2'>
      {showDeleteButton === false || buttons.deleteButton === false || remote.loadingItem || !remote.item?.id
        ? null
        : (
          <Button
            key='delete'
            onClick={handleDelete}
            color='outline-danger'
            loading={remote.deletingItem}
          >
            {buttons.deleteLabel || <FormattedMessage id={'global.delete'} />}
          </Button>
        )}
      {(buttons.close) && (
        <Button
          color='outline'
          key='back'
          onClick={handleClose}
        >
          <FormattedMessage id='global.close' />
        </Button>
      )}
      {!remote.loadingItem && buttons.saveButton && (
        <Button
          key='submit2'
          onClick={handleSave}
          color={buttons.saveButtonColor || 'primary'}
          loading={remote.savingItem}
        >
          <FormattedMessage id={buttons.saveButtonLabel || 'global.save_continue'} />
        </Button>
      )}
      {(!remote.loadingItem && buttons.saveCloseButton !== false && showSaveButton) && (
        <Button
          key='submit'
          onClick={handleSaveAndClose/* handleSaveAndClose */}
          color={buttons.saveCloseButtonColor || 'primary'}
          aria-label='Save'
          loading={remote.savingItem}
        >
          {buttons.saveIcon}
          {buttons.saveText || <FormattedMessage id={'global.save'} />}
        </Button>
      )}
      {!!buttons.renderRight && buttons.renderRight({
        handleSave,
        handleSaveAndClose,
        handleClose,
        item: remote.item,
        getForm,
        remote
      })}
    </div>
  )
}
