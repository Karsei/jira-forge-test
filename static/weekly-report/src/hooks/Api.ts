import buffer from 'buffer';
global.Buffer = buffer.Buffer;
export function requestJira(pUrl: string): Promise<Response> {
  return fetch(`https://gdomaindev.atlassian.net${pUrl}`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${Buffer.from('').toString('base64')}`,
      Accept: 'application/json',
    },
  });
}
