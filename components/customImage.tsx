import { BASE_PATH } from "@/lib/constants";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? BASE_PATH : '';

export default function CustomImage(props: any) {
  const newSrc = basePath + props.src;
  console.log(newSrc)
  return <img {...props} src={newSrc} alt={props.alt || ""} />;
};