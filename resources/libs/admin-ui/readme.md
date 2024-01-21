# Usage

```js
_setUrl = (page: any) => {
  if ( this.props.config?.setUrl ){

    const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    if(query.page !== `${page}`){
      query.page = `${page}`
      this.props.history.replace({ search: qs.stringify(query) })
    }
  }
}
//
_setUrl = (page: any) => {
  if ( this.props.config?.setUrl ){
    this.props.config.setUrl({ page })
  }
}

if (props.location) {
  const query = qs.parse(props.location.search, { ignoreQueryPrefix: true }) as any
  page = query.page ? parseInt(query.page, 10) : 1
}
```

## Change log

- cambiato comportamento confirmDeleteMessage che ora deve essere un string e non id del message
- pageTitle nel crud è ora un string e non id del message

### withpageform
- pageTitle quando è funzione non invia piu intl come paramentro


# Contributions
```
git remote add -f logipanel-ui git@gitlab.com:logicpanel/ui.git
git subtree add --prefix packages/ui/ logipanel-ui main --squash
git subtree push --prefix packages/ui logipanel-ui main
```
## Usings submodules
```
git submodule add git@gitlab.com:logicpanel/ui.git packages/ui
```
