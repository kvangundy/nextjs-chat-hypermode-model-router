export const hypermode = createOpenAI({
    name: 'hypermode',
    apiKey: process.env.HYPERMODE_API_KEY as string,
    baseURL: 'https://models.hypermode.host/v1',
  });
  
