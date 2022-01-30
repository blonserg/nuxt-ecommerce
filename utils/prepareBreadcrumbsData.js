export default function prepareBreadcrumbsData (pageType, route, data) {
  const crumbs = []
  crumbs.push({
    title: 'Main',
    url: '/'
  })
  switch (pageType) {
    case 'category':
      crumbs.push({
        title: data.title,
        url: `/category${data.slug}`
      })
      break
    case 'product':
      crumbs.push({
        title: data.title,
        url: `/category/${data.slug}`
      })
      crumbs.push({
        title: data.prod_title.toUpperCase(),
        url: `/product/${data.prod_slug}`
      })
      break
    case 'blog':
      crumbs.push({
        title: data.title.toUpperCase(),
        url: data.slug
      })
      break
    default:
      break
  }
  return crumbs
}
