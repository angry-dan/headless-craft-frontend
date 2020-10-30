/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Blog
// ====================================================

export interface Blog_entry_body_body_text_BlockType {
  __typename: "body_text_BlockType";
  /**
   * The id of the entity
   */
  id: string | null;
  text: string | null;
}

export interface Blog_entry_body_body_image_BlockType_image {
  __typename: "images_Asset";
  /**
   * An `<img>` tag based on this asset.
   */
  img: string | null;
}

export interface Blog_entry_body_body_image_BlockType {
  __typename: "body_image_BlockType";
  /**
   * The id of the entity
   */
  id: string | null;
  image: (Blog_entry_body_body_image_BlockType_image | null)[] | null;
}

export type Blog_entry_body = Blog_entry_body_body_text_BlockType | Blog_entry_body_body_image_BlockType;

export interface Blog_entry {
  __typename: "blog_blog_Entry";
  /**
   * The element’s title.
   */
  title: string | null;
  body: (Blog_entry_body | null)[] | null;
}

export interface Blog {
  /**
   * This query is used to query for a single entry.
   */
  entry: Blog_entry | null;
}
