export const getCollection = async (
  collection: string,
  relations: string[],
  publicationState: 'live' | 'preview' = 'live',
) => {
  const url = new URL(`${process.env.API_URL}/${collection}`);
  const params = new URLSearchParams({ publicationState, 'pagination[pageSize]': '50' });
  relations.forEach((relation) => {
    params.append('populate', relation);
  });

  url.search = params.toString();

  return (await (await fetch(url.toString())).json())['data'];
};
