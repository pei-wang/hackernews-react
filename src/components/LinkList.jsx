import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      {data && data.feed.links.map((item) => <Link key={item.id} link={item} />)}
    </div>
  );
};

export default LinkList;
