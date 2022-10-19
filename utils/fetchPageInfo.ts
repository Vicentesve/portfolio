import { PageInfo } from "../typing";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    }
  );

  try {
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
  } catch (err) {
    console.log("err: ", err);
  }
};
