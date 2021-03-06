import * as contentful from 'contentful'

class ContentfulUtil {
  static client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  })
  
  static fetchAllBlogPosts = () => ContentfulUtil.client.getEntries({
      content_type: 'blogpost',
      order: 'sys.createdAt'
    })

  static fetchPostByPathName = (pathName) => ContentfulUtil.client.getEntries({
      content_type: 'blogpost',
      'fields.path[in]': pathName
    })  

    // TESTING BY ID
    // static fetchSectionByID = (postID) => ContentfulUtil.client.getEntry(postID)
    static fetchSectionByID = (pathName) => ContentfulUtil.client.getEntries({
      'sys.id': pathName
    }) 
    
}

export default ContentfulUtil;