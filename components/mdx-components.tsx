"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Image from "next/image";
import CustomComponent from "@/components/custom-component";

const components = {
  Image,
  CustomComponent,
};

export default function Mdx(props: MDXRemoteProps) {
  return (
    <MDXRemote {...props} components={components} />
  );
}
