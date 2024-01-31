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
        'header','headerText', 'headerAfter',
        'main', 'mainTitle', 
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

    
