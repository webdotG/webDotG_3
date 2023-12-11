type SiteType = 'лендинг' | 'многостраничный' | 'магазин'; // Определение типа сайта

function calculateTotalPrice(selectedType: SiteType): number {
  let totalPrice = 0;

  switch (selectedType) {
    case 'лендинг':
      totalPrice = 500;
      break;
    case 'многостраничный':
      totalPrice = 750;
      break;
    case 'магазин':
      totalPrice = 1000;
      break;
    // Добавьте другие типы сайтов и их цены при необходимости
    default:
      totalPrice = 0;
  }

  return totalPrice;
}
