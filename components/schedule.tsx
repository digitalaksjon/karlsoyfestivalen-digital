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

import cn from 'classnames';
import { Stage, Talk } from '@lib/types';
import styles from './schedule.module.css';
import TalkCard from './talk-card';


function StageRow({ stage, day }: { stage: Stage, day: String }) {
  // Group talks by the time block
  const timeBlocks = stage.schedule.reduce((allBlocks: any, talk) => {
    allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
    return allBlocks;
  }, {});

  

  return (
    <div key={stage.name} className={styles.row}>
      <h3 className={cn(styles['stage-name'], styles[stage.slug])}>
        <span>{stage.name}</span>
      </h3>
      <div className={cn(styles.talks, styles[stage.slug])}>
        {Object.keys(timeBlocks).map((startTime: string) => {

            let todaysDate = new Date(startTime).getDate().toString();

            if (todaysDate == day) {
              return (
                <div key={startTime}>
                {timeBlocks[startTime].map((talk: Talk, index: number) =>  
                  (<TalkCard key={talk.title} talk={talk} showTime={index === 0} />)                  
                )}
              </div>
              )
            }
            })
        }
                            

      </div>
    </div>
  );
}

type Props = {
  allStages: Stage[];
};

import Header from '@components/header';

export default function Schedule({ allStages }: Props) {
  return (
    <div className={styles.container}>
      <Header hero="Søndag 1. august" description="" />
      <div className={styles['row-wrapper']}>
        {allStages.map(stage => {
  
          if (stage.name != 'Storscena (online)' && stage.name != 'Galleriet' && stage.name != 'Festivalplassen (online)') 
          return      ( <StageRow key={stage.slug} stage={stage} day="1" />)       
        }
          
        )}
      </div>
      <Header hero="Mandag 2. august" description="" />
      <div className={styles['row-wrapper']}>
        {allStages.map(stage => {
  
          if (stage.name != 'Storscena (online)' && stage.name != 'Galleriet' && stage.name != 'Festivalplassen (online)') 
          return      ( <StageRow key={stage.slug} stage={stage} day="2" />)       
        }
          
        )}
      </div>
      <Header hero="Tirsdag 3. august" description="" />
      <div className={styles['row-wrapper']}>
        {allStages.map(stage => {
  
          if (stage.name != 'Storscena (online)' && stage.name != 'Galleriet' ) 
          return      ( <StageRow key={stage.slug} stage={stage} day="3" />)       
        }
          
        )}
      </div>

      <Header hero="Onsdag 4. august" description="" />

      <div className={styles['row-wrapper']}>
        {allStages.map(stage => {
  
          if (stage.name != 'Storscena (online)' && stage.name != 'Galleriet' ) 
          return      ( <StageRow key={stage.slug} stage={stage} day="4" />)       
        }
          
        )}
      </div>

      <Header hero="Torsdag 5. august" description="" />

      <div className={styles['row-wrapper']}>
        {allStages.map(stage => {
  
          if (stage.name != 'Storscena (online)' ) 
          return      ( <StageRow key={stage.slug} stage={stage} day="5" />)       
        }
          
        )}
      </div>
 
      <Header hero="Fredag 6. august" description="" />

      <div className={styles['row-wrapper']}>
        {allStages.map(stage => (
          <StageRow key={stage.slug} stage={stage} day="6" />
        ))}
      </div>

      <Header hero="Lørdag 7. august" description="" />

      <div className={styles['row-wrapper']}>
        {allStages.map(stage => (
          <StageRow key={stage.slug} stage={stage} day="7" />
        ))}
      </div>

      <Header hero="Søndag 8. august" description="" />

      <div className={styles['row-wrapper']}>
        {allStages.map(stage => {
  
          if (stage.name != 'Storscena (online)' && stage.name != 'Galleriet' ) 
          return      ( <StageRow key={stage.slug} stage={stage} day="8" />)       
        }
          
        )}
      </div>
    </div>
  );
}
