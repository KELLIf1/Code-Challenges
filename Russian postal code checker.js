function zipvalidate(postcode) {
  if (typeof postcode !== "string") return false;

  if (!/^[12346][0-9]{5}$/.test(postcode)) return false;

  return true;
}
