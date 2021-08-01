import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

export const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      {data &&
        data.feed.links.map((item, index) => <Link key={item.id} link={item} index={index}/>)}
    </div>
  );
};

export default LinkList;
