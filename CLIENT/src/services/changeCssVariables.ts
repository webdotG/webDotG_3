// root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)
// --ФОРМАТ CSS ПЕРЕМЕННОЙ
// --theme-webdotg-УНИКАЛЬНОЕ_ИМЯ    -- для мятной
// --theme-uncicorng-УНИКАЛЬНОЕ_ИМЯ  -- для единорожек
// --theme-dotg-УНИКАЛЬНОЕ_ИМЯ       -- дл харда
// --theme-default-УНИКАЛЬНОЕ_ИМЯ    -- дефолтеая переменная

export const changeCssVariables = (theme: string) => {
  const root = document.querySelector(':root') as HTMLElement;

    if(root) {

      const cssVariables = [
        'header-background', 'header-name','header-social', 'headerAfter',
        'main-titleBack', 'main-titleText', 'main-titleG', 'main-titleSliding',
        'paralax-background',
        'main-aboutTitleBtn', 'main-aboutItem', 'main-aboutItemSvg', 'main-aboutItemText'
        
      ]
      
      cssVariables.forEach((element) => {
        root.style.setProperty(
          `--theme-default-${element}`,
          `var(--theme-${theme}-${element})`
        )
      })
    
    } else {
      console.error('Корневой элемент не найден.');
    }

}

    
