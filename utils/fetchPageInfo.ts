import { PageInfo } from "../typings";

export const fetchPageInfos = async () => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

  const data = await res.json();
  const pageInfo: PageInfo[] = data.pageInfo;
  return pageInfo;
};
