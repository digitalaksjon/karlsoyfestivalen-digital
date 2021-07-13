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

import { GetStaticProps } from 'next';

import Page from '@components/page';
import PostsGrid from '@components/posts-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllPosts } from '@lib/cms-api';
import { Post } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  posts: Post[];
};

export default function Registrering() {
  const meta = {
    title: 'Deltaker',
    description: "Bli med å skape en fantastisk opplevelse på Karlsøya"
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Registrer deg som deltaker" description={meta.description} />
        <div id="checkin_registration"></div>
        <script>
          (function(w, d) {
            d.event_id = 34340;
          var headTag = d.getElementsByTagName('head')[0];
          var script = d.createElement('script');
          script.src = 'https://registration.checkin.no/registration.loader.js';
          script.async = 1;
          script.crossOrigin = 1;
          headTag.appendChild(script);
})(window, document);
        </script>
      </Layout>
    </Page>
  );
}