"use client";

import { useCallback, useState } from "react";
import Feed from "./components/Feed";
import NavController from "./components/NavController";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Loading from "./loading.jsx";
import { Suspense } from "react";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set("q", value);

      return params.toString();
    },
    [searchParams]
  );

  const searchValue = searchParams.get("q") || "";

  const [filterValue, setFilterValue] = useState("");

  // Value of Filter input to be passed to Feed
  const filterValueInput = (value: string): void => {
    setFilterValue(value);
  };

  return (
    <>
      <NavController
        searchValue={searchValue}
        handleSearchInputValue={(input) => {
          const queryString = createQueryString(input);
          return router.replace(pathname + "?" + queryString, {
            scroll: false,
            shallow: false,
          });
        }}
        filterValue={filterValue}
        filterFunc={filterValueInput}
      />
      <Suspense fallback={<Loading />}>
        <Feed filterValue={filterValue} searchValue={searchValue} />
      </Suspense>
    </>
  );
}
