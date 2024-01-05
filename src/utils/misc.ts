export function getURLSlug(s: string): string {
  // using javascript's built-in encodeURI function
  // to make slugs cross compatable with obisidian note links
  return encodeURI(s);
}
