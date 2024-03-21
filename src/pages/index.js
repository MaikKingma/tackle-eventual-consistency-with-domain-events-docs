import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img src="img/theexperts_WitOranje.png" alt="the/experts" className="logo" width="50%" height="50%"></img>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Start Workshop
                        </Link>
                    </div>
            </div>
        </header>
);
}

export default function Home()
    {
        const {siteConfig} = useDocusaurusContext();
        return (
            <Layout
                title={`${siteConfig.title}`}
                description="Description will go into a meta tag in <head />">
                <HomepageHeader/>
                <main>
                    <HomepageFeatures/>
                </main>
            </Layout>
        );
    }
