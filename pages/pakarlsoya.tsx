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
 import Schedule from '@components/scheduleKarlsoya';
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
     title: 'Program for deltakere på Karlsøyfestivalen ',
     description: "Her finner du en oversikt over hva som skjer og når det skjer på Karsløya. Vi tar forbehold om endringer i programmet."
   };



    return (
     <Page meta={meta}>
       <Layout>
         <Header hero="Deltaker på Karlsøya" description={meta.description} />
         <p style={{margin:'var(--space-16x) var(--space-8x) var(--space-4x)'}}>
         Nå er det rett før vi åpner for en ny type festivalopplevelse på Karlsøya.


Opplevelsen her på Karlsøya vil bestå av at vi i fellesskap skaper de digitale opplevelsene samtidig som vi skaper gode opplevelser for hverandre og koser oss sammen.

Frokostmøtene som er kl. 12 hver dag er noe det viktigste som skjer på hele festivalen. Da spiser vi mat og snakker om hva som skal skje iløpet av dagen.

Viktige arbeidsoppgaver vil være å skape infrastruktur med presseninger og annet slik at vi kan ha ly om det blir dårlig vær, skaffe ved til bål, trivsel, sikkerhet og smittevern. I tillegg er det en hel haug med andre oppgaver, og disse snakker vi om morgenmøtene.

Det er ikke krav om at du jobber noe spesielt antall timer, bare at du bidrar og deltar med det du har lyst til.


Programmet vil i all hovedsak presenteres digitalt. Dere som kommer til øya vil få tilgang til alt det digitale innholdet når dere kommer hjem.

 
         </p>
         <Schedule allStages={allStages} />
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

