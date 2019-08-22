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
      excerpt: excerpt.rendered,
      featuredMedia: _embedded['wp:featuredmedia'].map(media => {
        const { id, title, caption, media_details } = media;

        return {
          id,
          title: title.rendered,
          caption: caption.rendered,
          media: media_details.sizes
        }
      }),
      author: _embedded.author.map(author => {
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