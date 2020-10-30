import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";
import { Blog } from "./__generated__/Blog";

const q = gql`
  query Blog {
    entry(slug: "another-blog") {
      title
      ... on blog_blog_Entry {
        body {
          ... on ElementInterface {
            id
          }
          ... on body_text_BlockType {
            text
          }
          ... on body_image_BlockType {
            image {
              img
            }
          }
        }
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery<Blog>(q);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>React + GraphQL + Craft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{data.entry.title}</h1>
      <>
        {data.entry.body.map((r) => {
          switch (r.__typename) {
            case "body_text_BlockType":
              return <p key={r.id}>{r.text}</p>;
            case "body_image_BlockType":
              return (
                <p key={r.id}>
                  <div className={styles.img} dangerouslySetInnerHTML={{ __html: r.image[0].img }} />
                </p>
              );
          }
        })}
      </>
    </div>
  );
}
