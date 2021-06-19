/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GetStaticProps, GetStaticPaths } from 'next';

import Page from '@components/page';
import PostSection from '@components/post-section';
import Layout from '@components/layout';

import { getAllPosts } from '@lib/cms-api';
import { Post } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';
import { urlFor } from '@lib/cms-api';


type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {

  const image = urlFor(post.featuredImage).width(1000);
  const meta = {
    title: post.title,
    description: META_DESCRIPTION,
    image: image.toString()
  };

  return (
    <Page meta={meta}>
      <Layout>
        <PostSection post={post} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const posts = await getAllPosts();
  const currentPost = posts.find((s: Post) => s.slug === slug) || null;

  return {
    props: {
      post: currentPost
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const slugs = posts.map((s: Post) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
