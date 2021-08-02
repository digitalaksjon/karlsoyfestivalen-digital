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
 import Schedule from '@components/schedule';
 import Layout from '@components/layout';
 import Header from '@components/header';
 
 import { Stage } from '@lib/types';
 import { META_DESCRIPTION } from '@lib/constants';
 import { getAllStages } from '@lib/cms-api';
 
 type Props = {
   allStages: Stage[];
 };
 
 export default function SchedulePage({ allStages }: Props) {
   const meta = {
     title: 'Støy!Video',
     description: "Årets videokunstgalleri"
   };



    return (
     <Page meta={meta}>
       <Layout>
       <iframe src="https://vimeo.com/showcase/8710300/embed" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
       </Layout>
     </Page>
   );
 }
 
 export const getStaticProps: GetStaticProps<Props> = async () => {
   const allStages = await getAllStages();
 
   return {
     props: {
       allStages
     },
     revalidate: 60
   };
 };

