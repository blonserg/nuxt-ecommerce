export default function prepareFilterQueries (params, priceRange) {
    let preparedQueries = '';
    for (const [key, value] of Object.entries(params)) {
      if(key === 'price-range' && value.length > 0) {
        preparedQueries  += `&min_price=${value[0]}&max_price=${value[1]}`;
      } else if (key === 'promotions' && value.length > 0 || key === 'gender' && value.length > 0) {
            preparedQueries += `&${value.join('=1&')}=1`;
        } else if (value.length > 0 && key !== 'price-range') {
            preparedQueries += `&${key.split('-')[0]}=${value.join(',')}`
        }
      }
    preparedQueries = '?' + preparedQueries.substring(1);

    return preparedQueries
  }