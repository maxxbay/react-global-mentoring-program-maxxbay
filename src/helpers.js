export const formatMovieData = data => {
  return {
    title: data.title || 'Untitled',
    poster_path: data.poster_path || 'https://via.placeholder.com/150',
    release_date: data.release_date || '1970-01-01',
    vote_average: data.vote_average ? parseFloat(data.vote_average) : 0,
    runtime: data.runtime ? parseInt(data.runtime, 10) : 0,
    genres: [data.genre || 'Other'],
    overview: data.overview || 'No overview',
  };
};

export const editMovieData = (id, data) => {
  return {
    id: parseInt(id),
    title: data.title,
    tagline: data.tagline,
    vote_average: parseFloat(data.vote_average),
    vote_count: parseInt(data.vote_count),
    release_date: data.release_date,
    poster_path: data.poster_path,
    overview: data.overview,
    budget: parseInt(data.budget),
    revenue: parseInt(data.revenue),
    runtime: parseInt(data.runtime),
    genres: [data.genre],
  };
};
