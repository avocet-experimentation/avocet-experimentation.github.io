// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

const CASE_STUDY_ROUTE = "/case-study"

const DOCUMENTATION_ROUTE = "/documentation"

export const CASE_STUDY_ROUTES: EachRoute[] = [
  {
    title: "Case Study",
    href: CASE_STUDY_ROUTE,
    noLink: true,
    items: [
      { title: "Background", href: "/background" },
      {
        title: "The Avocet Advantage",
        href: "/avocet-advantage",
      },
      {
        title: "Architecture",
        href: "/architecture",
      },
      {
        title: "Engineering Decisions",
        href: "/engineering-decisions",
      },
      {
        title: "Technical Challenges",
        href: "/technical-challenges",
      },
      {
        title: "Appendices",
        href: "/appendices",
        noLink: true,
        items: [
          {
            title: "Terminology",
            href: "/terminology",
          },
          {
            title: "Theory",
            href: "/theory",
          },
          {
            title: "References",
            href: "/References",
          },
        ]
      },
    ],
  },
];

export const DOCUMENTATION_ROUTES: EachRoute[] = [];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const case_study_routes = CASE_STUDY_ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
export const documentation_routes = DOCUMENTATION_ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
