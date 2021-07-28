import * as contentful from 'contentful'

class ContentfulUtil {
  static client = contentful.createClient({
    space: 'pw1wgczsxbbk',
    accessToken: 'Aup43k9HRjzACAEq5nVJY2iffgM_TZAX9YXJUgtEjR8'
  })
  
  static fetchAllBlogPosts = () => ContentfulUtil.client.getEntries({
      content_type: 'blogpost',
      order: '-sys.createdAt'
    })

  static fetchPostByPathName = (pathName) => ContentfulUtil.client.getEntries({
      content_type: 'blogpost',
      'fields.path[in]': pathName
    })  
}
export default ContentfulUtil;