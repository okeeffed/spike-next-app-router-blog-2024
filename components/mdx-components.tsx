import Image, { ImageProps } from "next/image"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer/hooks"

const mdxComponents = {
  Image: (props: ImageProps) => (
    <Image {...props} alt={props.alt ?? "No alt provided"} />
  ),
  a: (props: any) => (
    <Link
      {...props}
      className="text-blue-500 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
    />
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={mdxComponents} />
}
