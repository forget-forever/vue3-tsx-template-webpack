export default async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  return res;
}