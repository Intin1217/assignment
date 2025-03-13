interface Response {
  predictions: string[];
}

export const fetchImageFromAPI = async (
  prompt: string[],
): Promise<Response | null> => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    body: JSON.stringify({
      prompt: `${prompt[0]}색의 ${prompt[1]} 표정을 하고 있는 ${prompt[2]} 그림을 그려줘`,
      style: 'childrens_book',
      width: 256,
      height: 256,
      steps: 1,
      num: 4,
    }),
  };

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}`, options);
    return await res.json();
  } catch {
    return null;
  }
};
