const fetchHeroImage = async ({queryKey}) => {
  const id = queryKey[1];
  const apiRes = await fetch(`https://dog.ceo/api/breeds/image/random`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchHeroImage;