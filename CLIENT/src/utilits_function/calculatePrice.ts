export type typeSiteType = 'лендинг' | 'многостраничный' | 'магазин' | 'индивидуальный' | 'шаблон';

export function calculateTotalPrice(selectedType: typeSiteType, isChecked: boolean, totalPrice: number, optionName: string, optionChecked: boolean): number {
  let additionalPrice = 0;

  switch (selectedType) {
    case 'лендинг':
      additionalPrice += isChecked ? 100 : -100;
      break;
    case 'многостраничный':
      additionalPrice += isChecked ? 175 : -175;
      break;
    case 'магазин':
      additionalPrice += isChecked ? 250 : -250;
      break;
    case 'индивидуальный':
      additionalPrice += isChecked ? 28 : -28;
      break;
    case 'шаблон':
      additionalPrice += isChecked ? 14 : -14;
      break;
    default:
      break;
  }

  if (optionName === 'дизайн' && optionChecked) {
    additionalPrice += 10; 
  } else if (optionName === 'дизайн' && !optionChecked) {
    additionalPrice -= 10; 
  }
  if (optionName === 'логотип' && optionChecked) {
    additionalPrice += 20; 
  } else if (optionName === 'логотип' && !optionChecked) {
    additionalPrice -= 20; 
  }
  if (optionName === 'фирменные цвета' && optionChecked) {
    additionalPrice += 30; 
  } else if (optionName === 'фирменные цвета' && !optionChecked) {
    additionalPrice -= 30; 
  }
  if (optionName === 'индивидуальные иконки' && optionChecked) {
    additionalPrice += 40; 
  } else if (optionName === 'индивидуальные иконки' && !optionChecked) {
    additionalPrice -= 40; 
  }
  if (optionName === 'индивидуальные картинки' && optionChecked) {
    additionalPrice += 50; 
  } else if (optionName === 'индивидуальные картинки' && !optionChecked) {
    additionalPrice -= 50; 
  }
  if (optionName === 'срочно' && optionChecked) {
    additionalPrice += 60; 
  } else if (optionName === 'срочно' && !optionChecked) {
    additionalPrice -= 60; 
  }
  
  return totalPrice + additionalPrice;
}
