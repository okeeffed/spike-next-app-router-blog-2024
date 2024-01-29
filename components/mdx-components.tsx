import Image, { ImageProps } from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const mdxComponents = {
  Image: (props: ImageProps) => (
    <Image {...props} alt={props.alt ?? "No alt provided"} />
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={mdxComponents} />
}
