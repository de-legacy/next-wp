const normalizePosts = (response) => {
  const posts = response.data;

  return posts.map(post => {
    const { id, date, date_gmt, slug, title, content, excerpt, status, _embedded } = post;
    return {
      id,
      date,
      date_gmt,
      status,
      slug,
      title: title.rendered,
      content: content.rendered,
      excerpt: excerpt.rendered.replace(new RegExp('<\s*a[^>]*>(.*?)<\s*/\s*a>'), ''),
      featuredMedia: typeof _embedded['wp:featuredmedia'] === 'undefined' ? [] : _embedded['wp:featuredmedia'].map(media => {
        const { id, title, caption, media_details } = media;

        return {
          id,
          title: title.rendered,
          caption: caption.rendered,
          media: media_details.sizes
        }
      }),
      author: typeof _embedded.author === 'undefined' ? [] : _embedded.author.map(author => {
        const { name, url, description } = author;
        return {
          name,
          url,
          description
        }
      })
    }
  })
}

export default{
  normalizePosts
}