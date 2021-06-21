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

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-second'], styles.brand)}>
        Velkommen til <br />
        {BRAND_NAME}
      </h1>
      <div className={cn(styleUtils.appear, styleUtils['appear-first'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>I DIGITALE KANALER</strong>
        </p>
      </div>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-second'], styles.hero)}>
        <div>Mari Boine <span>|</span> Polardegos <span>|</span> Jan Steigen <span>|</span>  Ohnesorg <span>|</span>  Karlsøy Prestegaard <span>|</span>  Roastfish & Cornbread Sound System <span>|</span>  MoE <span>|</span>  Hotbox <span>|</span>  One Family <span>|</span>  Kunstnerkollektivet Støy <span>|</span>  Barnemakt! <span>|</span> Utstilling på Galleri Carlsö <span>|</span>  Jemterud / Brungot / Trio <span>|</span>  Bens Bluesband <span>|</span>  Barnas Gourmetkjøkken og mye mye mer</div>
      </h1>
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
      <div className={cn(styleUtils.appear, styleUtils['appear-forth'], styles.metawrapper)}>
        <div className={cn(styles.iframes)} style={{ padding: '56.25% 0 0 0', position: 'relative', margin: '0 2% 0 0' }}><iframe src="https://player.vimeo.com/video/562882348?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '70%', border: '2px dashed #fff', padding: '10px' }} title="Minner fra Karls&amp;oslash;yfestivalen 2020"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.manifest)}>
          <div className={cn(styles.inner_manifest)}>
            <h2>KARLSØYFESTIVALENS MANIFEST</h2>

            <div>
              Karlsøyfestivalen er ei markering av motstand mot et samfunn der de viktigste verdiene er lønnsomhet, konkurranse og grådighet. Den er en protest mot raseringen av distriktene, miljøødeleggelsene, rasisme og diskriminering. Den protesterer mot kolonialismen, utbyttinga og den brutale undertrykkinga av verdens folk.
            </div>

            <div>
              Karlsøyfestivalen er en fest for og ei feiring av alle positive motkrefter! Den skal gjenspeile, gjenskape og fremme alle de alternative kreftene som kjemper for en annen og bedre verden preget av solidaritet, medfølelse og kjærlighet!

            </div>
          </div>

        </div>

      </div>

    </div >

  );
}
