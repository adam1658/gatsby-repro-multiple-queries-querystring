import { graphql } from "gatsby";
import * as React from "react";

export default function DemoPage({ data, context }) {
  return <pre>{JSON.stringify({ data, context }, null, 2)}</pre>;
}

export const query = graphql`
  query DemoPage {
    site {
      id
    }
  }
`;
