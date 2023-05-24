type Primitive = string | number | boolean;

const stringify = (
  params?: Record<string, Primitive | undefined>,
): string => {
  if (params == null) return "";

  const searchParams = new URLSearchParams([
    ...Object.entries(params).reduce<string[][]>((acc, [key, value]) => {
      if (value != null) {
        acc.push([key, value.toString()]);
      }
      return acc;
    }, []),
  ]);
  return searchParams.toString();
};

const query = {
  stringify,
};

export default query;
