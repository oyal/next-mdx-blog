"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
export default function Mdx(props: MDXRemoteProps) {
  return <MDXRemote {...props} />;
}
