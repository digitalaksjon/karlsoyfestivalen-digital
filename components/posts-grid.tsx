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

import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@lib/types';
import styles from './posts-grid.module.css';
import { urlFor } from '@lib/cms-api';
import BlockContent from '@sanity/block-content-to-react'


type Props = {
  posts: Post[];
};

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default function PostsGrid({ posts }: Props) {
  console.log(posts)
  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <Link key={post.title} href={`/nyheter/${post.slug}`}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                alt={post.title}
                src={urlFor(post.featuredImage).width(400).height(400).url() || ''}
                className={styles.image}
                loading="lazy"
                quality="50"
                title={post.title}
                width={400}
                height={400}
              />

            </div>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.name}>{post.title}</h2>
                <p className={styles.title}>

                  <span className={styles.company}>{post.excerpt && <BlockContent blocks={post.excerpt} serializers={serializers} />}</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
