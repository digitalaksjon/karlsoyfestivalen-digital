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
import SpeakersGrid from '@components/speakers-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllMusikk, getAllKunst, getAllFramtid, getAllFellesskap } from '@lib/cms-api';
import { Speaker } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  musikk: Speaker[];
  kunst: Speaker[];
  framtid: Speaker[];
  fellesskap: Speaker[];
};

export default function Speakers({ musikk, kunst, framtid, fellesskap }: Props) {
  const meta = {
    title: 'Artister, kunstnere og andre bidragsytere',
    description: "Årets musikalske program"
  };
  
  return (
    <Page meta={meta}>
      <Layout>
      <div style={{padding: '52.73% 0 0 0', position: 'relative'}} ><iframe src='https://vimeo.com/showcase/8710300/embed'  frameBorder='0' style={{position: 'absolute', top:'0', left: '0', width:'100%', height: '100%'}}></iframe></div>
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {

  const musikk = await getAllMusikk();
  const kunst = await getAllKunst();
  const framtid = await getAllFramtid();
  const fellesskap = await getAllFellesskap();

  return {
    props: {
      musikk,
      kunst,
      framtid,
      fellesskap
    },
    revalidate: 60
  };
};
