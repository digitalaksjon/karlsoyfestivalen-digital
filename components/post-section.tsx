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
import cn from 'classnames';
import BlockContent from '@sanity/block-content-to-react'

import { Post } from '@lib/types';
import styles from './post-section.module.css';
import { urlFor } from '@lib/cms-api';


type Props = {
  post: Post;
};





Date.prototype.getMonthName = function () {
  var monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Desember"
  ];
  return monthNames[this.getMonth()];
}


export default function PostSection({ post }: Props) {
  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }

  const dateObject = new Date(post.publishedAt);
  return (
    <>
      <Link href="/nyheter">
        <a className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Tilbake til nyheter
        </a>
      </Link>
      <div key={post.title} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            alt={post.title}
            title={post.title}
            src={urlFor(post.featuredImage).width(600).height(600).url() || ''}
            className={styles.image}
            layout="fill"


          />
        </div>

        <div className={styles['speaker-details']}>
          <div>
            <h1 className={styles.name}>{post.title}</h1>
            <p className={styles.date} dangerouslySetInnerHTML={{
              __html: "Publisert: " + dateObject.getDate() + ". <span>" + dateObject.getMonthName() + " " + dateObject.getFullYear() + "</span>",
            }}></p>


            <p className={styles.bio}>
              {post.body && <BlockContent blocks={post.body} serializers={serializers} />}
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
