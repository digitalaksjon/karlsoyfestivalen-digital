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

import useSWR from 'swr';
import cn from 'classnames';
import { Stage } from '@lib/types';
import useLoginStatus from '@lib/hooks/use-login-status';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import ScheduleSidebar from './schedule-sidebar';
import ConfEntry from './conf-entry';


type Props = {
  stage: Stage;
  allStages: Stage[];
};

export default function StageContainer({ stage, allStages }: Props) {
  const response = useSWR('/api/stages', {
    initialData: allStages,
    refreshInterval: 5000
  });

  const updatedStages = response.data || [];
  const updatedStage = updatedStages.find((s: Stage) => s.slug === stage.slug) || stage;
  const { loginStatus, mutate } = useLoginStatus();
  const vimeoURL = "https://vimeo.com/event/"+stage.discord+"/embed"
  return (
    <div className={styles.container}>

      <div className={styles.streamContainer}>
        <iframe src={vimeoURL} width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
        <iframe src="https://vimeo.com/event/1068769/chat/" width="100%" height="100%" frameBorder="0"></iframe>
        {loginStatus === 'loggedIn' ? (
          <div className={cn(styles.stream, styleUtils.appear, styleUtils['appear-first'])}>

          </div>
        ) : loginStatus === 'loading' ? null : (
          <div></div>
        /* <ConfEntry onRegister={() => mutate()} /> */
        )}
      </div>
      <ScheduleSidebar allStages={updatedStages} />
    </div>
  );
}
