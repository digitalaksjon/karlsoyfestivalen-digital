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

import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';
import cn from 'classnames';
import styles from './hero.module.css';
import styleUtils from './utils.module.css';
import Image from 'next/image';
import image from '../public/plakat.png';
import { NAVIGATION } from '@lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import stylesMenu from './layout.module.css';

export default function Hero() {
  const router = useRouter();
  const activeRoute = router.asPath;

  return (
    <div className={styles.wrapper}>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-first'], styles.brand)}>
        Velkommen til <br />
        {BRAND_NAME}
      </h1>
      <div className={cn(styleUtils.appear, styleUtils['appear-second'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>I DIGITALE KANALER</strong>
        </p>
      </div>

      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles.metawrapper)}>
        <div className={cn(styles.iframes)} style={{ padding: '56.25% 0 0 0', position: 'relative', margin: '0 0 2% 0' }}>
          <iframe src="https://vimeo.com/event/1145417/embed" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '70%', border: '2px dashed #fff', padding: '10px' }} title="Karlsøyfestivalen 2021">
          
          </iframe>
        </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
    

      </div>
      <div className={cn(styleUtils.appear, styles.anothermenu, styleUtils['appear-fourth'], stylesMenu.metawrapper)}>
      <div >
              {NAVIGATION.map(({ name, route }) => (
                <Link key={name} href={route}>
                  <a
                    className={cn(styles.tab, {
                      [stylesMenu['tab-active']]: activeRoute.startsWith(route)
                    })}
                  >
                    {name}
                  </a>
                </Link>
              ))}
            </div>
      </div>
    </div>
  );
}
