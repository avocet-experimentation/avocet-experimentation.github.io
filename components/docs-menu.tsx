import { CASE_STUDY_ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";

export default function DocsMenu({ isSheet = false }) {
  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6">
      {CASE_STUDY_ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/case-study${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
