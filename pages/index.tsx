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

import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '@components/page';
import ConfContent from '@components/index';
import { META_DESCRIPTION, IG_USERNAME, IG_PASSWORD } from '@lib/constants';
//const Instagram = require('instagram-web-api')
import image1 from '../public/bakgrunn5.jpg';

import { urlFor } from '@lib/cms-api';

// import InstagramFeed from '../components/instagramfeed';

export interface ConfProps {
  instagramPosts: any[];
}

export default function Conf({ instagramPosts}: ConfProps) {
  const { query } = useRouter();
  const meta = {
    title: 'Karlsøyfestivalen Digital',
    description: META_DESCRIPTION,
    image: "https://karlsoyfestivalen-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fy36fur6j%2Fproduction%2Ff24bbebf1b08d8d5435712c6e11b98043f0a19bc-1280x850.jpg%3Frect%3D0%2C69%2C1280%2C711%26w%3D900%26h%3D500&w=1920&q=75"
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />
      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
      />

    </Page >
  );
}

/*

export async function getStaticProps() {

  const client = new Instagram({
    username: IG_USERNAME,
    password: IG_PASSWORD,
  })

  console.log(client)

  let posts = []
  try {
    await client.login()

    // request photos for a specific instagram user
    const instagram = await client.getPhotosByUsername({
      username: IG_USERNAME,
    })

    if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]

    }
  } catch (err) {
    console.log(
      "Something went wrong while fetching content from Instagram",
      err
    )
  }

  return {
    props: {
      instagramPosts: posts, // returns either [] or the edges returned from the Instagram API based on the response from the `getPhotosByUsername` API call
    },
  }
}*/