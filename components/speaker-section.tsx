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
import Instagram from '@components/icons/icon-github';
import Facebook from '@components/icons/icon-linkedin';
import { Speaker } from '@lib/types';
import styles from './speaker-section.module.css';
import { urlFor } from '@lib/cms-api';
import image from 'next/image';
import BlockContent from '@sanity/block-content-to-react'


type Props = {
  speaker: Speaker;
};

const serializers = {
  types: {

    mainImage: image
  }
}


export default function SpeakerSection({ speaker }: Props) {
  return (
    <>
      <Link href="/artist">
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
          Tilbake til artister
        </a>
      </Link>
      <div key={speaker.name} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            alt={speaker.name}
            title={speaker.name}
            src={urlFor(speaker.image).width(600).height(600).url() || ''}
            className={styles.image}
            layout="intrinsic"
            width={600}
            height={600}

          />
        </div>

        <div className={styles['speaker-details']}>
          <div>
            <h1 className={styles.name}>{speaker.name}</h1>
            <p className={styles.title}>
              {`${speaker.title} `}
              <span className={styles.company}>{speaker.company}</span>
            </p>
            <h2 className={styles['bio-header']}>Bio</h2>
            <p className={styles.bio}> {speaker.bio && <BlockContent blocks={speaker.bio} serializers={serializers} />}</p>
            <h3 className={styles['socials-header']}>{speaker.name} i sosiale medier</h3>
            {speaker.twitter ? (
              <a
                aria-label="Instagram"
                href={speaker.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
            ) : (
              <span className={styles.disabled}>
                <Instagram size={24} />
              </span>
            )}
            {speaker.github ? (
              <a
                aria-label="Facebook"
                className={styles.githubIcon}
                href={speaker.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook width={22} />
              </a>
            ) : (
              <span className={cn(styles.githubIcon, styles.disabled)}>
                <Facebook width={22} />
              </span>
            )}
          </div>
        </div>
      </div>

    </>
  );
}
