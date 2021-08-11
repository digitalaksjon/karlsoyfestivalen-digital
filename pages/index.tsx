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

import { urlFor } from '@lib/cms-api';
import BackgroundSlideshow from 'react-background-slideshow'


import PostsGrid from '@components/posts-grid';

import { getAllPosts } from '@lib/cms-api';
import { Post } from '@lib/types';
import { GetStaticProps } from "next";



import image1 from '../public/bakgrunn1.jpg';
import image2 from '../public/bakgrunn2.jpg';
import image3 from '../public/bakgrunn3.jpg';
import image4 from '../public/bakgrunn4.jpg';
import image5 from '../public/bakgrunn5.jpg';
import image6 from '../public/bakgrunn6.jpg';
import image7 from '../public/bakgrunn7.jpg';
import image8 from '../public/bakgrunn8.jpg';

const imageArray = [image3,image4,image5,image6,image7,image8];

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
  posts: Post[];
};
// import InstagramFeed from '../components/instagramfeed';

export interface ConfProps {
  instagramPosts: any[];
}

export default function Conf({posts}:Props) {
  const { query } = useRouter();
  const meta = {
    title: 'Karlsøyfestivalen Digital',
    description: META_DESCRIPTION,
    image: 'https://www.karlsoyfestivalen.no/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fy36fur6j%2Fproduction%2Fd186f50cb945d0922afb8319bf6304d4e75f5f41-3360x2468.png%3Frect%3D446%2C0%2C2468%2C2468%26w%3D600%26h%3D600&w=1200&q=75'
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };
  const loaded = useLoaded();
  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />

    {loaded &&
      <BackgroundSlideshow images={imageArray} animationDelay={12000} />
      }
        
      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
        posts={posts}
      />

      

    </Page >
  );
}

function shuffle(array: string[]) {
  var currentIndex = array.length, randomIndex;



  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
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

import {useEffect, useState} from "react";

export const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
};


export const getStaticProps: GetStaticProps = async () => { // must be async
  const posts = await getAllPosts();

  return  {
    props: {
      posts: posts
    }
  };
}