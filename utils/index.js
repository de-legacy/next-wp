const normalizePosts = (response) => {
  const posts = response.data;

  return posts.map(post => {
    const { id, date, date_gmt, slug, title, content, excerpt, status, _embedded } = post;
    let featuredMedia = [];
    let author = [];

    if (typeof _embedded !== 'undefined') {
      if (typeof _embedded['wp:featuredmedia'] !== 'undefined') {
        featuredMedia = _embedded['wp:featuredmedia'];
      }
    }

    if (typeof _embedded !== 'undefined') {
      if (typeof _embedded.author !== 'undefined') {
        author = _embedded.author;
      }
    }

    return {
      id,
      date,
      date_gmt,
      status,
      slug,
      title: title.rendered,
      content: content.rendered,
      excerpt: excerpt.rendered.replace(new RegExp('<\s*a[^>]*>(.*?)<\s*/\s*a>'), ''),
      featuredMedia: featuredMedia.map(media => {
        const { id, title, caption, media_details } = media;

        return {
          id,
          title: title.rendered,
          caption: caption.rendered,
          media: media_details.sizes
        }
      }),
      author: author.map(author => {
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