// todo: refactor or delete
export default function collectFilterQueries ({query, filters}) {
  let filterQueries = [];
  for (const [key, value] of Object.entries(query)) {
    filters.forEach((filter) => {
        if(filter.slug === key) {
          filterQueries.push(key);
        }
        if(filter.slug === "gender" && filter.results.length > 0 || filter.slug === "promotions" && filter.results.length > 0) {
            filter.results.forEach((item) => {
                if(item.slug === key) {
                  filterQueries.push(item.slug);
                }
            })
        }
    })
  };
    return filterQueries
  }