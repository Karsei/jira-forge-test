import buffer from 'buffer';
global.Buffer = buffer.Buffer;
export function requestJira(pUrl: string): Promise<Response> {
  return fetch(`https://gdomaindev.atlassian.net${pUrl}`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${Buffer.from('leejy@gabia.com:Tvil5GwdANfpvLJ751de9F87').toString('base64')}`,
      Accept: 'application/json',
    },
  });
}
