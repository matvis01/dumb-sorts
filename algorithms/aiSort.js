export async function aiSort(array, apiKey, model = 'gemini-2.0-flash') {
  try {
    const prompt = `Sort this array and return only the sorted array, nothing else also write it as a normal text [${array.join(
      ', '
    )}]`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const res = await response.json();
    const text = res.candidates[0].content.parts[0].text;
    const cleanText = text.replace(/[^\[\]0-9,]/g, '');
    return await JSON.parse(cleanText);

  } catch (error) {
    console.error('Error during AI sort:', error);
    return array;
  }
}
