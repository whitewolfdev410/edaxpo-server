import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { PageActionButtons } from './PageActionButtons'
import JDialog from './Dialog'

interface ModalProps {
  children: any;
  width: string | number | undefined;
  opened?: any;
  onClose?: any;
  saveButtonTitle?: string;
  saveButton?: boolean;
  searchButton?: boolean;
  /**
   * This title can be personalized
   */
  title?: any;
  /**
   * This title has to be in the translations file, and it will need the "add" keyword and an "edit" counterpart
   */
  adaptiveTitle?: string;
  handleSubmit?: any
  itemId?: any
  loadingSave?: boolean
  loadingItem?: boolean
}

const CrudDialog = ({
  children,
  width,
  saveButton = true,
  title,
  adaptiveTitle,
  searchButton = false,
  itemId,
  loadingItem,
  onClose
}:ModalProps) => {
  const [disabled, setDisabled] = useState(true)
  const showHeader = title || saveButton || searchButton
  let finalTitle
  if (adaptiveTitle) {
    finalTitle = (
      <FormattedMessage id={
        itemId !== 0
          ? adaptiveTitle.replace('add', 'edit')
          : adaptiveTitle
      }
      />
    )
  } else if (title) {
    finalTitle = title
  }

  return (
    <>
      <JDialog
        title=''
        opened={true}
        footer={null}
        width={width}
        centered
        modal
        onClose={onClose}
      >
        <div>
          {!loadingItem && (
            <header>
              <div
                className={`w-full ${showHeader ? 'h-full mb-0' : 'h-0'} text-2xl`}
                onMouseOver={() => {
                  if (disabled) {
                    setDisabled(false)
                  }
                }}
                onMouseOut={() => setDisabled(true)}
              >
                <div className='flex-between font-bold'>
                  {finalTitle || <div className={'h-5'} />}
                </div>
              </div>
            </header>
          )}
          <div className="p-4">
            {children}
          </div>
            <div className="py-4">
                <PageActionButtons />
            </div>
        </div>
      </JDialog>
    </>
  )
}
export default CrudDialog
