import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";

import { getMDXComponents } from "@/mdx-components";
import { source } from "@/lib/source";

type Params = { slug?: string[] };

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const isIndex = !slug || slug.length <= 1;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      breadcrumb={{ enabled: !isIndex }}
    >
      {!isIndex && (
        <>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      )}
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
