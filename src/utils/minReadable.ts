function minReadable(min: number): string {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;

  return hours ? `${hours} h ${minutes} min` : `${minutes} min`;
}

export { minReadable };
