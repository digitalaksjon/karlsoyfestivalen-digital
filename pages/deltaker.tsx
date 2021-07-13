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
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import DeltakerSchema from '@components/deltaker-schema';

export default function Deltaker() {


  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  useEffect(() => {
      router.replace(router.asPath);
    });

  //...
  const meta = {
    title: 'Deltaker',
    description: "Bli med å skape en fantastisk opplevelse på Karlsøya"
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Registrer deg som deltaker" description={meta.description} />
        <DeltakerSchema />
      </Layout>
    </Page>
  );
}
