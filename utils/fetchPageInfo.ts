import { PageInfo } from "../typing";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  console.log(res.status);

  if (res.status !== 200) {
    throw new Error(`There was an error with status code ${res.status}`);
  }

  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
