import cn from 'classnames';
import VercelLogo from '@components/icons/icon-logo';
import styles from './footer.module.css';
import { COPYRIGHT_HOLDER, SITE_NAME, CODE_OF_CONDUCT, LEGAL_URL, REPO } from '@lib/constants';

export function HostedByVercel() {
  return (
    <a
      href="/"
      className={cn(styles['footer-link'], styles['footer-logo'])}

      rel="noopener noreferrer"
    >
      <div className={styles['secondary-text']}>Created by </div>
      <VercelLogo color="white" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className={cn(styles.footer)}>
      <div className={styles['footer-legal']}>
        <div className={styles['footer-hostedby']}>
          <HostedByVercel />
          <div className={styles['footer-separator']} />
        </div>
        <div className={styles['footer-copyright']}>
          {`${new Date().getFullYear()} `} {COPYRIGHT_HOLDER || `${SITE_NAME}.`}
        </div>
       
      </div>
    </footer>
  );
}
