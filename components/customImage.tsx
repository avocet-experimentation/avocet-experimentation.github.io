import Image from "next/image";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? process.env.BASE_PATH : '';

export default function CustomImage(props: any) {
  const newSrc = basePath + props.src;
  console.log(newSrc)
  return <img {...props} src={newSrc} alt={props.alt || ""} />;
};