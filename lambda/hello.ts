export const handler = async function (event: any) {
  console.log('request:', JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `Good Night, TS-CDK! You've hit ${event.path}\n`,
  };
};