## Configuration

En el config context podemos configurar el componente que usara como modal
    
```tsx
const adminUiConfig = (navigate: NavigateFunction): ConfigContextType => ({
  ModalComponent: Dialog,
  ... 
})
```

el componente puede usar el context para recuperar los handlers y construir los botones etc.

```tsx
const { handleSave, remote } = useContext(PageContext)
```